import { Injectable } from "@nestjs/common";
import * as AWS from "aws-sdk";

@Injectable()
export class UploadService {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      endpoint: process.env.R2_ENDPOINT,
      accessKeyId: process.env.R2_ACCESS_KEY,
      secretAccessKey: process.env.R2_SECRET_KEY,
      signatureVersion: "v4",
    });
  }

  async uploadFile(file: Express.Multer.File) {
    const key = `${Date.now()}-${file.originalname}`;
    const upload = await this.s3
      .upload({
        Bucket: process.env.R2_BUCKET!,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read",
      })
      .promise();

    return upload.Location; // URL pública da imagem
  }
}
