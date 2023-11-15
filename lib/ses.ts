"use server";

import { config, SES } from "aws-sdk";
import { SendEmailRequest } from "aws-sdk/clients/ses";
import { TContactSchema } from "./ContactSchema";

config.credentials = {
  accessKeyId: process.env.AWS_ACCESS_KEY || "",
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
};

config.update({
  region: "us-east-1",
});

export async function sendSESEmail(formData: TContactSchema) {
  let sent = false;

  const { first_name, last_name, email, phone, description } = formData;
  try {
    const params: SendEmailRequest = {
      Destination: {
        ToAddresses: ["devin@tidalsites.com"],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: generateTemplateEmail({
              first_name,
              last_name,
              email,
              phone,
              description,
              company: formData.company_name
                ? formData.company_name
                : "None Specified",
            }),
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Contact Request",
        },
      },
      Source: "devin@tidalsites.com",
    };

    const ses = new SES({ apiVersion: "2010-12-01" }).sendEmail(params);

    await ses.promise();
    sent = true;
  } catch (e) {
    console.log(e);
  }

  return sent;
}

type EmailParameters = {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone: string;
  description: string;
};

function generateTemplateEmail({
  first_name,
  last_name,
  company,
  email,
  phone,
  description,
}: EmailParameters) {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body>
            <main style="display: flex; flex-direction: column; gap: 1rem;">
                <p>Contact Form Request from ${first_name} ${last_name}</p>
                <p>Company Name: ${company}</p>
                <p>Email Address: ${email}</p>
                <p>Phone Number: ${phone}</p>
                <p>Description: ${description}</p>
            </main>
        </body>
    </html>
`;
}
