import * as brevo from "@getbrevo/brevo";

const apiIntance =new brevo.TransactionalEmailsApi();
apiIntance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY  as string
);

interface Params {
    subject:string,
    to:{email:string, name:string}[],
    htmlContent: string

}



export async function sendEmail({subject, to , htmlContent}: Params){

    try{
        const smtpEmail = new brevo.SendSmtpEmail()
        smtpEmail.subject= subject;
        smtpEmail.to = to;
        smtpEmail.htmlContent='<html><body>${htmlContent}</body></hmtl>';
        smtpEmail.sender={name: "Krisstti", email:"krist_sharing@hotmail.com"};
        await  apiIntance.sendTransacEmail(smtpEmail);
    }
    catch(error){
        console.error(error);

    }


}

   