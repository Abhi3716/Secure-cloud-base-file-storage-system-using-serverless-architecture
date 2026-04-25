const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const storage = admin.storage();

exports.generateSignedUrl = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "Login required");
  }

  const { filePath } = data;

  if (!filePath) {
    throw new functions.https.HttpsError("invalid-argument", "File path required");
  }

  try {
    const bucket = storage.bucket();
    const file = bucket.file(filePath);

    const [url] = await file.getSignedUrl({
      action: "read",
      expires: Date.now() + 60 * 60 * 1000,
    });

    return { url };

  } catch (err) {
    console.error(err);
    throw new functions.https.HttpsError("internal", "Failed to generate URL");
  }
});
