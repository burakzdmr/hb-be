## Genel Açıklama

Uygulama nest js kullanılarak yazılmıştır. Servis sağlamak için graphql tercih edilmiştir.
db olarak free tier uzak sunucu Postgresql kullanıldı. 
Db connection bilgileri env ve env.development dosyasında bulunaktadır.


## Installation

```bash
$ npm install
```

## Running the app

$ npm run start

Uygulama 3000 portunu dinlemektedir. değişiklik yapılmak istenirse env dosyasındaki PORT variable ı değiştirlebilr.



## Test

Uygulamaya testler yazıldı ancak, app.module 'ü sarmallayan graphql'in context e ulaşamaması hatasını çözemediğim için testler kırıktır.
NestJs i yeni deneyimlediğimden dolayı hatayı çözebilmiş değilim.


```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
