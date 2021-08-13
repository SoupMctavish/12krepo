import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SellerEntity } from './seller.entity';
import { SellersService } from './sellers.service';
import { diskStorage } from 'multer';
import { customName } from 'src/utils/customname';

@Controller('sellers')
export class SellersController {

    constructor(private service:SellersService) {

    }

    @Get()
    getAllSellers() {
        return this.service.getAllSellers();
    }

    @Get(":id")
    getSeller(@Param() params){
        return this.service.getSeller(params.id);
    }

    @Post()
    addSeller(@Body() seller: SellerEntity) {
        return this.service.createSeller(seller);
    }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('image',{
            storage: diskStorage({
                destination: './avatars',
                filename: customName
            })
        })
    ) 
    async uploadFile(@Body() seller: SellerEntity, @UploadedFile() file){
        seller.icon = file.filename;

        await this.service.createSeller(JSON.parse(JSON.stringify(seller)));

        const response = {
            originalName: file.originalname,
            finalName: file.filename
        }

        return{
            status: HttpStatus.OK,
            message: 'Image has been uploaded',
            data: response
        }
    }


    @Put()
    updateSeller(@Body() seller: SellerEntity) {
        this.service.updateSeller(seller);
    }

    @Delete(":id")
    deleteSeller(@Param() params) {
        this.service.deleteSeller(params.id);
    }
}
