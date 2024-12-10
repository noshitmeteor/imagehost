# Image Host

This is a simple image hosting website that allows you to upload images and have it embedded in Discord messages.

## Features

- Upload images
- Embed images in Discord messages
- Customize embeds (settings in `settings.ts`)
- Download configuration files for ShareX

## Example
<img width="515" alt="image" src="https://github.com/user-attachments/assets/fe0f7521-f3c3-46ae-aa5d-6e8c4612f726">

## Local Development
1. Run `npm run dev` to start the development server
2. Open `http://localhost:3000` in your browser
3. Change the settings in `settings.ts` to your liking

## Deploying
1. Press on the deploy button
2. Generate a API Key from [this api key generator](https://generate-random.org/api-key-generator) and keep this somewhere noted
3. Set the `API_KEY` environement variable as the API Key you generated and then dont change any other settings and deploy it
4. Once deployed go to the project settings and you will find the URL to your vercel site, you can also connect your custom domain by going to settings and going in the domain section
5. Once you connected your domain or you found your vercel URL, go to the github repo that vercel created for you (should be `YOURUSERNAME/my-image-host`)
6. Once you are in the github repo change the `settings.ts` file to your liking.
7. Finally open up your site to the download page (example: https://i.upio.dev/download)
8. Put your api key that you generated into the textbox and download the sharex configuration
And you are done! If you need help setting this up please create a issue in the github repo.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnotpoiu%2Fimagehost.git&env=API_KEY&envDescription=A%20Custom%20API%20Key%20that%20will%20serve%20as%20the%20way%20to%20validate%20that%20the%20screenshot%20is%20uploaded%20from%20you.%20Do%20NOT%20share%20this%20api%20key%20to%20anyone.&project-name=my-image-host&repository-name=my-image-host&stores=%5B%7B%22type%22%3A%22blob%22%7D%5D)
