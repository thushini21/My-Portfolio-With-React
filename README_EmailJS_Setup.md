# EmailJS Setup Instructions

## Current Issue
The contact form is not sending emails to your inbox because the EmailJS configuration needs to be updated with your actual credentials.

## Steps to Fix:

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your email: thushiniakashi58@gmail.com

### 2. Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" 
4. Connect your Gmail account
5. Note down the **Service ID**

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Portfolio Contact - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down the **Template ID**

### 4. Get Public Key
1. Go to "Integration" tab
2. Copy your **Public Key**

### 5. Update Code
Replace these values in `Homepage.tsx`:

```javascript
const result = await emailjs.send(
    'YOUR_SERVICE_ID',     // Replace with your Service ID
    'YOUR_TEMPLATE_ID',    // Replace with your Template ID  
    templateParams,
    'YOUR_PUBLIC_KEY'      // Replace with your Public Key
);
```

### 6. Test
1. Fill out the contact form
2. Check your Gmail inbox (and spam folder)
3. You should receive the contact form messages

## Template Variables Used:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Thushini)
- `{{to_email}}` - Your email address

## Alternative Solution
If EmailJS doesn't work, you can also use:
- Formspree (https://formspree.io/)
- Netlify Forms (if hosting on Netlify)
- Contact form services like Typeform