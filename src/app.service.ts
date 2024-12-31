import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

/*
Client id: 32408256726-k31dnj7acbpd3o8dq3e097d8kpkgsacb.apps.googleusercontent.com
client secret: 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

{
  "email": "rubykala.webethics@gmail.com",
  "firstName": "Ruby",
  "lastName": "kala",
  "picture": "https://lh3.googleusercontent.com/a/ACg8ocJcWShz8dlZa6chdqs_IN8Oe1uZsq0MDbVm_YfR3ND-xT5iNQ=s96-c",
  "accessToken": "ya29.a0ARW5m76HWXqOmiceEqH0RyHMkYuthUqHCCHNUh2M9obWcWWLCRdqXYeqLaoGa-LdqbCU82lryyaJkHUcZpIp7GkF-yxZtOh6bIZ8RL121U6AuVMoPAB7ztSvupmZisyybwjrz6GSbfVW2YPPiXfYUZLlSRrh1SrpfROrdBJraCgYKAc0SARMSFQHGX2MihYC16UNN5tmI_tZpD6VulQ0175"
}


*/
