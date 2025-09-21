import { Injectable } from "@nestjs/common";
import * as AWS from "aws-sdk";
import { v4 as uuid } from "uuid";

@Injectable()
export class UploadService {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      endpoint: process.env.R2_ENDPOINT,
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
      region: "auto",
      signatureVersion: "v4",
    });
  }

  async uploadFile(file: Express.Multer.File) {
    const key = `${uuid()}-${file.originalname}`;

    await this.s3
      .putObject({
        Bucket: process.env.R2_BUCKET_NAME!,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      })
      .promise();

    // Sempre retorna a URL pública do R2
    return { url: `${process.env.R2_PUBLIC_URL}/${key}` };
  }
}
