# mail-boilerplate

This boilerplate contains all the code to create a mail api, spam-protection included.

## Functions
- Recieve POST-requests (from forms, other api's, ...)
- Free [Askimet spam-protection (free for non-commercial purposes)](https://akismet.com/signup/?plan=developer)

## Setup
#### 1. Deploy this repo to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Flennertderyck%2Fmail-boilerplate&env=SMTP_ACCOUNT,SMTP_PASSWORD,SMTP_HOST,SMTP_PORT,ASKIMET_KEY,DOMAIN,RECIEVER_ENDS_WITH&envDescription=(Required)%20options%20for%20the%20application&envLink=https%3A%2F%2Fgithub.com%2Flennertderyck%2Fmail-boilerplate%233-edit-environement-variables-in-vercel&project-name=fwd-yourdomain-com&repo-name=fwd.yourdomain.com)

#### 2. Edit environement variables in vercel

> This will be asked during deployment

|Variable|Required|Example|About|
|--------|--------|-------|-----|
|```SMTP_ACCOUNT```         | yes                       | email@example.com     | This is the account that will send the emails
|```SMTP_PASSWORD```        | yes                       | p@ssw0rd              | The password for this account
|```SMTP_HOST```            | yes                       | smtp.example.com      | The address to your mail-server
|```SMTP_PORT```            | yes                       | 465                   | The port of your mail-server
|```ASKIMET_KEY```          | no                        | 1234567890            | [Get a Askimet api-key](https://akismet.com/signup/?plan=developer) to enable spam-protection
|```DOMAIN```               | yes, when using askimet   | www.example.com       | The domain from where you will recieve POST-requests (this is only a description for Askimet stats)
|```RECIEVER_ENDS_WITH```   | yes                       | @example.com          | This property will check that the recievers email (yours) will end with the given string

#### 3. Add your .env file to .gitignore if this is not the case
```
.env
```

#### 4. Add local .env file
```
SMTP_ACCOUNT=email@example.com
SMTP_PASSWORD=p@ssw0rd
SMTP_HOST=smtp.example.com
SMTP_PORT=465
ASKIMET_KEY=1234567890
DOMAIN=www.example.com
RECIEVER_ENDS_WITH=@example.com 
```
