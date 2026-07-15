'use server';

import { Resend } from 'resend';
import PDFDocument from 'pdfkit';

const resend = new Resend(process.env.RESEND_API_KEY || 're_FcZ8sT7W_3jem716T63GaCGgJRBx1HDLb');

// Email configuration from environment variables
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'Amna.Shabbir@Globalpharmaceuticalspk.Com';
const CAREER_EMAIL = process.env.CAREER_EMAIL || 'Amna.Shabbir@Globalpharmaceuticalspk.Com';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'Amna.Shabbir@Globalpharmaceuticalspk.Com';
const ADR_REGISTRY_EMAIL = process.env.ADR_REGISTRY_EMAIL || 'regulatory@globalpharmaceuticalspk.com';

const DRUG_COL_KEYS = [
  'drugName',
  'batchNo',
  'manufacturer',
  'route',
  'dosage',
  'startDate',
  'stopDate',
  'prescribedFor',
];

const DEVICE_COL_KEYS = [
  'deviceName',
  'batchNo',
  'manufacturer',
  'modelNo',
  'uniqueId',
  'serialNo',
  'implantedDate',
  'explantedDate',
];

// Helper to generate the ADR PDF matching the PDF form styling
function generateADRPDF(formData: any): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: 'A4', margin: 40 });
      const chunks: Buffer[] = [];

      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', (err) => reject(err));

      const fontRegular = 'Times-Roman';
      const fontBold = 'Times-Bold';
      const fontItalic = 'Times-Italic';

      // --- PAGE 1 ---
      // Draw background color (subtle yellow tint like the paper form)
      doc.fillColor('#FFFFEE').rect(0, 0, 595.28, 841.89).fill();

      // Draw main black border around the page
      doc.strokeColor('#000000').lineWidth(1.5).rect(20, 20, 555.28, 801.89).stroke();

      // Top Header
      doc.fillColor('#000000');
      doc.font(fontBold).fontSize(15).text('SUSPECTED ADVERSE DRUG REACTION REPORTING FORM', 40, 35, { align: 'center' });
      doc.font(fontRegular).fontSize(8.5).text('This form is for voluntary reporting of adverse drug reactions caused by therapeutic goods marketed in Pakistan.', 40, 52, { align: 'center' });
      doc.font(fontBold).fontSize(9.5).text('For Healthcare Professionals', 40, 66, { align: 'center' });

      // Left Info (Email)
      doc.font(fontBold).fontSize(9).text('Email: regulatory@globalpharmaceuticalspk.com', 40, 84);

      // Office Use Only Box on the right
      doc.strokeColor('#000000').lineWidth(1).rect(360, 80, 200, 42).stroke();
      doc.font(fontBold).fontSize(9).text('For Office Use Only', 370, 86);
      doc.font(fontRegular).fontSize(9).text('Report No. __________________', 370, 102);

      let y = 132;

      // Section Header helper
      const drawSectionHeader = (title: string, sub?: string) => {
        doc.strokeColor('#000000').lineWidth(1.5).moveTo(40, y).lineTo(555, y).stroke();
        y += 4;
        doc.font(fontBold).fontSize(10).text(title, 40, y);
        if (sub) {
          const width = doc.widthOfString(title);
          doc.font(fontItalic).fontSize(9).text(sub, 40 + width + 5, y + 1);
        }
        y += 13;
        doc.strokeColor('#000000').lineWidth(1).moveTo(40, y).lineTo(555, y).stroke();
        y += 6;
      };

      // Field drawer helper
      const drawField = (label: string, value: string, width: number, x: number) => {
        doc.font(fontBold).fontSize(9).text(label, x, y);
        const labelWidth = doc.widthOfString(label);
        const valX = x + labelWidth + 4;
        const valWidth = width - labelWidth - 4;
        doc.font(fontRegular).fontSize(9).text(value || '', valX, y, { width: valWidth });
        // Draw underline
        doc.strokeColor('#000000').lineWidth(0.5).moveTo(valX, y + 10).lineTo(x + width, y + 10).stroke();
      };

      // --- SECTION A. PATIENT DETAILS ---
      drawSectionHeader('A. PATIENT DETAILS');
      drawField('Patient\'s Initials or Name:', formData.patientName, 240, 40);
      drawField('Identification Number (Medical/Hospital Ref):', formData.patientId, 260, 290);
      y += 18;

      drawField('Sex: Male / Female:', formData.patientSex, 110, 40);
      drawField(', If Female, pregnant or not:', formData.femalePregnant, 150, 160);
      drawField('Age (at the time of reaction):', formData.patientAge, 130, 320);
      drawField('Weight (kg):', formData.patientWeight, 100, 460);
      y += 22;

      // --- SECTION B. SUSPECTED DRUGS ---
      drawSectionHeader('B. SUSPECTED DRUG(S)/VACCINE(S)/ALTERNATIVE MEDICINE(S)', ' (use additional pages if necessary):');
      
      // Draw Table B
      const colWidths = [95, 40, 65, 75, 50, 55, 55, 75];
      const colHeaders = ['Drug/Vaccine/Alternative', 'Batch No', 'Manufacturer', 'Route & Daily', 'Dosage &', 'Start Date', 'Stop Date', 'Prescribed For'];
      
      const drawTable = (prefix: string, rowCount: number) => {
        // Table Headers
        let tempX = 40;
        doc.font(fontBold).fontSize(7.5);
        colHeaders.forEach((h, idx) => {
          doc.rect(tempX, y, colWidths[idx], 18).stroke();
          doc.text(h, tempX + 2, y + 4, { width: colWidths[idx] - 4, align: 'center' });
          tempX += colWidths[idx];
        });
        y += 18;

        // Table Rows
        doc.font(fontRegular).fontSize(8);
        for (let r = 0; r < rowCount; r++) {
          tempX = 40;
          // Draw cells
          DRUG_COL_KEYS.forEach((col, idx) => {
            doc.rect(tempX, y, colWidths[idx], 16).stroke();
            const val = formData[`${prefix}_${col}_${r + 1}`] || '';
            doc.text(val, tempX + 2, y + 4, { width: colWidths[idx] - 4, lineBreak: false });
            tempX += colWidths[idx];
          });
          y += 16;
        }
        y += 6;
      };

      drawTable('suspectedDrug', 2);

      // --- SECTION C. SUSPECTED REACTIONS ---
      drawSectionHeader('C. SUSPECTED REACTION(S)', ' (use additional pages if necessary):');
      drawField('1. When reaction started (DD/MM/YY):', formData.reactionStartedDate, 240, 40);
      drawField('2. When recovery started (DD/MM/YY):', formData.reactionRecoveryDate, 260, 290);
      y += 20;

      // Textareas and Checklist layout
      const reactionDesc = formData.reactionDescription || '';
      const medicalHistory = formData.medicalHistory || '';
      const labData = formData.labData || '';

      const reactionHeight = Math.max(30, doc.heightOfString(reactionDesc, { width: 245 }) + 8);
      const historyHeight = Math.max(30, doc.heightOfString(medicalHistory, { width: 245 }) + 8);
      const labHeight = Math.max(30, doc.heightOfString(labData, { width: 245 }) + 8);

      const checklistBoxX = 295;
      const checklistBoxW = 260;
      const checklistBoxH = reactionHeight + historyHeight + labHeight + 48;

      // Draw left text blocks
      let currTextY = y;
      doc.font(fontBold).fontSize(8.5).text('3. Describe the reaction(s):', 40, currTextY);
      currTextY += 12;
      doc.rect(40, currTextY, 245, reactionHeight).stroke();
      doc.font(fontRegular).fontSize(8.5).text(reactionDesc, 44, currTextY + 3, { width: 237 });
      
      currTextY += reactionHeight + 6;
      doc.font(fontBold).fontSize(8.5).text('4. Other relevant history of the patient:', 40, currTextY);
      currTextY += 12;
      doc.rect(40, currTextY, 245, historyHeight).stroke();
      doc.font(fontRegular).fontSize(8.5).text(medicalHistory, 44, currTextY + 3, { width: 237 });

      currTextY += historyHeight + 6;
      doc.font(fontBold).fontSize(8.5).text('5. Relevant tests/Laboratory data with dates:', 40, currTextY);
      currTextY += 12;
      doc.rect(40, currTextY, 245, labHeight).stroke();
      doc.font(fontRegular).fontSize(8.5).text(labData, 44, currTextY + 3, { width: 237 });

      // Draw right checklist box (Items 6 - 10)
      doc.strokeColor('#000000').lineWidth(1).rect(checklistBoxX, y, checklistBoxW, checklistBoxH).stroke();
      
      let currBoxY = y + 6;
      doc.font(fontBold).fontSize(8.5).text('6. Do you consider the reaction(s) to be serious?', checklistBoxX + 6, currBoxY);
      doc.font(fontRegular).fontSize(7.5).text('Serious criteria selected:', checklistBoxX + 12, currBoxY + 12);
      
      const seriousList = Array.isArray(formData.seriousCriteria) ? formData.seriousCriteria : [formData.seriousCriteria].filter(Boolean);
      let listStr = seriousList.join(', ');
      if (formData.seriousOtherDetails) listStr += ` (Details: ${formData.seriousOtherDetails})`;
      doc.font(fontRegular).fontSize(8).text(listStr || 'None', checklistBoxX + 12, currBoxY + 22, { width: checklistBoxW - 24 });
      
      currBoxY += 45;
      doc.strokeColor('#aaaaaa').lineWidth(0.5).moveTo(checklistBoxX, currBoxY).lineTo(checklistBoxX + checklistBoxW, currBoxY).stroke();
      
      currBoxY += 6;
      doc.font(fontBold).fontSize(8.5).text('7. Reaction abated after stop/reduction?', checklistBoxX + 6, currBoxY);
      doc.font(fontRegular).fontSize(8.5).text(`Selected: ${formData.dechallenge || 'Not specified'}`, checklistBoxX + 12, currBoxY + 12);
      
      currBoxY += 28;
      doc.strokeColor('#aaaaaa').lineWidth(0.5).moveTo(checklistBoxX, currBoxY).lineTo(checklistBoxX + checklistBoxW, currBoxY).stroke();
      
      currBoxY += 6;
      doc.font(fontBold).fontSize(8.5).text('8. Reaction reappeared after reintroduction?', checklistBoxX + 6, currBoxY);
      doc.font(fontRegular).fontSize(8.5).text(`Selected: ${formData.rechallenge || 'Not specified'}`, checklistBoxX + 12, currBoxY + 12);

      currBoxY += 28;
      doc.strokeColor('#aaaaaa').lineWidth(0.5).moveTo(checklistBoxX, currBoxY).lineTo(checklistBoxX + checklistBoxW, currBoxY).stroke();

      currBoxY += 6;
      doc.font(fontBold).fontSize(8.5).text('9. Outcomes:', checklistBoxX + 6, currBoxY);
      const outcomesList = Array.isArray(formData.outcomes) ? formData.outcomes : [formData.outcomes].filter(Boolean);
      let outcomeStr = outcomesList.join(', ');
      if (formData.outcomeOther) outcomeStr += ` (Other: ${formData.outcomeOther})`;
      doc.font(fontRegular).fontSize(8).text(outcomeStr || 'Not specified', checklistBoxX + 12, currBoxY + 12, { width: checklistBoxW - 24 });

      currBoxY += 28;
      doc.strokeColor('#aaaaaa').lineWidth(0.5).moveTo(checklistBoxX, currBoxY).lineTo(checklistBoxX + checklistBoxW, currBoxY).stroke();

      currBoxY += 6;
      doc.font(fontBold).fontSize(8.5).text('10. Problem related to:', checklistBoxX + 6, currBoxY);
      const problemList = Array.isArray(formData.problemRelated) ? formData.problemRelated : [formData.problemRelated].filter(Boolean);
      let problemStr = problemList.join(', ');
      if (formData.problemOther) problemStr += ` (Other: ${formData.problemOther})`;
      doc.font(fontRegular).fontSize(8).text(problemStr || 'Not specified', checklistBoxX + 12, currBoxY + 12, { width: checklistBoxW - 24 });

      // Update y to the end of the sections
      y = Math.max(currTextY + labHeight + 12, y + checklistBoxH + 12);

      // --- PAGE 2 ---
      // Force page break to match Page 3 of the PDF (Additional page) for sections D, E, F
      doc.addPage({ size: 'A4', margin: 40 });
      doc.fillColor('#FFFFEE').rect(0, 0, 595.28, 841.89).fill();
      doc.strokeColor('#000000').lineWidth(1.5).rect(20, 20, 555.28, 801.89).stroke();
      
      y = 40;
      doc.fillColor('#000000');
      doc.font(fontBold).fontSize(14).text('SUSPECTED ADVERSE DRUG REACTION REPORTING FORM', 40, y, { align: 'center' });
      y += 18;

      // --- SECTION D. OTHER CONCOMITANT DRUGS ---
      drawSectionHeader('D. OTHER CONCOMITANT DRUG(S)/VACCINE(S)/ALTERNATIVE MEDICINE(S)', ' (use additional pages if necessary):');
      drawTable('concomitantDrug', 2);

      // --- SECTION E. SUSPECTED MEDICAL DEVICES ---
      drawSectionHeader('E. SUSPECTED MEDICAL DEVICE(S)', ' (fill this area for suspected Device only):');
      
      const devColWidths = [120, 55, 65, 50, 60, 50, 55, 60];
      const devColHeaders = ['Medical Device Name', 'Lot/Batch', 'Manufacturer', 'Model No', 'Unique ID', 'Serial No', 'Implanted', 'Explanted'];
      
      // Headers
      let tempX = 40;
      doc.font(fontBold).fontSize(7.5);
      devColHeaders.forEach((h, idx) => {
        doc.rect(tempX, y, devColWidths[idx], 18).stroke();
        doc.text(h, tempX + 2, y + 4, { width: devColWidths[idx] - 4, align: 'center' });
        tempX += devColWidths[idx];
      });
      y += 18;

      // Row 1
      tempX = 40;
      doc.font(fontRegular).fontSize(8);
      DEVICE_COL_KEYS.forEach((col, idx) => {
        doc.rect(tempX, y, devColWidths[idx], 16).stroke();
        const val = formData[`suspectedDevice_${col}_1`] || '';
        doc.text(val, tempX + 2, y + 4, { width: devColWidths[idx] - 4, lineBreak: false });
        tempX += devColWidths[idx];
      });
      y += 24;

      // --- SECTION F. REPORTER DETAILS ---
      drawSectionHeader('F. REPORTER DETAILS');
      doc.font(fontBold).fontSize(9.5).text('“This form neither has any legal value nor can be presented before any Court of Law as an Evidence.”', 40, y, { align: 'center', oblique: true });
      y += 20;

      drawField('Name:', formData.reporterName, 240, 40);
      drawField('Professional Address:', formData.reporterAddress, 260, 290);
      y += 18;

      drawField('Specialty:', formData.reporterSpecialty, 180, 40);
      drawField('Tel No:', formData.reporterTel, 140, 230);
      drawField(', Email Address:', formData.reporterEmail, 170, 380);
      y += 18;

      drawField('Date of this report:', formData.reportDate, 180, 40);
      drawField('Signature:', formData.reporterSignature, 330, 230);
      y += 24;

      drawField('Have you reported this problem to Provincial Pharmacovigilance Centre or Manufacturer? If yes, specify:', formData.reportedToCentre, 515, 40);

      doc.end();
    } catch (e) {
      reject(e);
    }
  });
}

export async function sendADRFormEmail(formData: any, recipientEmails?: string | string[]) {
  try {
    console.log("Received formData:", formData);
    
    // Create formatted email content
    let emailHtml = `
      <div style="font-family: 'Outfit', Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
        <div style="background-color: #fff; padding: 20px; border-radius: 8px; max-width: 700px;">
          <h2 style="color: #911526; border-bottom: 2px solid #911526; padding-bottom: 10px;">
            🏥 New Form Submission Received
          </h2>
          
          <p style="color: #666; font-size: 16px; margin: 20px 0;">
            A new form has been submitted. Details are below:
          </p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
    `;
    
    // Format data for email - handle all field types
    const dataToDisplay = formData;
    let hasData = false;

    // Add all form fields to email
    Object.entries(dataToDisplay).forEach(([key, value]) => {
      if (key === 'formType') return; // Skip formType field
      
      if (value !== null && value !== undefined && value !== '' && value !== '[]') {
        hasData = true;
        const label = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase())
          .trim();
        const displayValue = Array.isArray(value) ? value.join(', ') : String(value).substring(0, 500);
        emailHtml += `
          <div style="margin-bottom: 15px;">
            <strong style="color: #911526; font-size: 16px;">${label}:</strong>
            <p style="margin: 6px 0 0 0; color: #333; font-size: 13px; line-height: 1.6;">${displayValue}</p>
          </div>
        `;
      }
    });

    if (!hasData) {
      emailHtml += `<p style="color: #999; font-style: italic;">No data provided</p>`;
    }
    
    emailHtml += `
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            <strong>Submission Time:</strong> ${new Date().toLocaleString()}<br>
            This email was automatically sent from Global Pharmaceuticals System.<br>
            Please do not reply to this email.
          </p>
        </div>
      </div>
    `;

    // Determine recipient email(s)
    let recipients: string[] = [CONTACT_EMAIL]; // Default email
    
    if (recipientEmails) {
      recipients = Array.isArray(recipientEmails) ? recipientEmails : [recipientEmails];
    } else if (formData.type === 'Job Application' || formData.type === 'Job Search Filter Submission') {
      // Career forms go to career email
      recipients = [CAREER_EMAIL];
    } else if (formData.formType === 'Contact Form') {
      // Contact form goes to main email and admin email
      recipients = [CONTACT_EMAIL, ADMIN_EMAIL];
    } else if (formData.formType === 'ADR Reporting Form') {
      recipients = [ADR_REGISTRY_EMAIL];
    }

    const subject =
      formData.formType === 'ADR Reporting Form'
        ? 'New ADR Report - Global Pharmaceuticals'
        : '🏥 New Form Submission - Global Pharmaceuticals';

    console.log('Email recipients:', recipients);
    console.log('Generating attachments...');

    let attachments: any[] = [];
    if (formData.formType === 'ADR Reporting Form') {
      try {
        const pdfBuffer = await generateADRPDF(formData);
        attachments.push({
          filename: 'ADR-Suspected-Adverse-Drug-Reaction-Report.pdf',
          content: pdfBuffer,
        });
        console.log('PDF attachment successfully generated!');
      } catch (pdfErr) {
        console.error('❌ Failed to generate PDF attachment:', pdfErr);
      }
    }

    console.log('Sending email via Resend API...');
    
    // Send to all recipients
    const response = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: recipients,
      subject,
      html: emailHtml,
      attachments,
    });

    console.log('Resend API Response:', response);
    console.log('Response data:', JSON.stringify(response.data));
    console.log('Response error:', response.error);

    if (response.error) {
      console.error('❌ Resend error details:', response.error);
      const errorMsg = response.error?.message || 'Failed to send email';
      console.error('Error message:', errorMsg);
      return { 
        success: false, 
        error: errorMsg,
        details: response.error
      };
    }

    console.log('Email sent successfully with ID:', response.data?.id);
    return { 
      success: true, 
      message: 'Form submitted successfully! We will review your submission and contact you soon.' 
    };
  } catch (error: any) {
    console.error('Server error:', error);
    return { 
      success: false, 
      error: error?.message || 'Failed to submit form. Please try again.' 
    };
  }
}