# mail-boilerplate

This boilerplate contains all the code to create a mail api, spam-protection included.

## Functions
- Recieve POST-requests (from forms, other api's, ...)
- Free [Askimet spam-protection (free for non-commercial purposes)](https://akismet.com/signup/?plan=developer)

## Setup
#### 1. Deploy this repo to Vercel

#### 3. Edit environement variables in vercel
```
SMTP_ACCOUNT=email@example.com
SMTP_PASSWORD=p@ssw0rd
ASKIMET_KEY=1234567890
DOMAIN=www.example.com
```

- ```SMTP_ACCOUNT``` This will be the account that will send the emails
- ```SMTP_PASSWORD``` The password for this account
- ```ASKIMET_KEY``` [Get a Askimet api-key](https://akismet.com/signup/?plan=developer) to enable spam-protection
- ```DOMAIN``` The domain from where you will recieve POST-requests (this is only a description for Askimet)

#### 2. Add local .env file
```
SMTP_ACCOUNT=email@example.com
SMTP_PASSWORD=p@ssw0rd
ASKIMET_KEY=1234567890
DOMAIN=www.example.com
```
