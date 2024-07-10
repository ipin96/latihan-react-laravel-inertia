const Ziggy = {"url":"http:\/\/latihan-react-laravel-inertia.test:8080","port":8080,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"profile.edit":{"uri":"profile","methods":["GET","HEAD"]},"profile.update":{"uri":"profile","methods":["PATCH"]},"profile.destroy":{"uri":"profile","methods":["DELETE"]},"guru.index":{"uri":"guru","methods":["GET","HEAD"]},"guru.create":{"uri":"guru\/create","methods":["GET","HEAD"]},"guru.store":{"uri":"guru","methods":["POST"]},"guru.show":{"uri":"guru\/{guru}","methods":["GET","HEAD"],"parameters":["guru"]},"guru.edit":{"uri":"guru\/{guru}\/edit","methods":["GET","HEAD"],"parameters":["guru"]},"guru.update":{"uri":"guru\/{guru}","methods":["PUT","PATCH"],"parameters":["guru"]},"guru.destroy":{"uri":"guru\/{guru}","methods":["DELETE"],"parameters":["guru"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.store":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"password.update":{"uri":"password","methods":["PUT"]},"logout":{"uri":"logout","methods":["POST"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
