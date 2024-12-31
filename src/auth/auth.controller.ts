import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Redirects to Google for authentication
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    // Handles the callback from Google, Returns the authenticated user info
    //return req.user;
    // Destructure user details from the Google OAuth response
    const { firstName, lastName, email, picture } = req.user;

    // Return HTML with dynamic user data, can be done with a view file instead
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>User Profile</title>
      </head>
      <body>
          <h1>Welcome, ${firstName} ${lastName}!</h1>
          <p>Email: ${email}</p>
          <img src="${picture}" alt="Profile Picture" width="100">
      </body>
      </html>
    `;
  }
}
