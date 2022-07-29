import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      projectId: 'portfolio-278dd',
    }),
    databaseURL:
      'https://portfolio-278dd-default-rtdb.firebaseio.com/',
  });
}

export default admin.database();
