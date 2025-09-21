import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UploadService } from "./upload.service";

@Controller("upload")
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor("file"))
  async upload(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { error: "Nenhum arquivo enviado" };
    }
    return this.uploadService.uploadFile(file);
  }
}
