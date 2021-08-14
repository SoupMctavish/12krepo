import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ItemEntity } from './item.entity';
import { diskStorage } from 'multer';
import { ItemsService } from './items.service';
import { customName } from 'src/utils/customname';

@Controller('items')
export class ItemsController {

    constructor(private service: ItemsService){

    }

    @Get()
    getAllItems() {
        return this.service.getAllItems();
    }

    @Get(":id")
    getItem(@Param() params){
        return this.service.getItem(params.id);
    }

    @Post()
    addItem(@Body() item: ItemEntity) {
        return this.service.createItem(item);
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

    async uploadFile(@Body() item: ItemEntity, @UploadedFile() file){
        item.g_logo = file.filename;
        await this.service.createItem(JSON.parse(JSON.stringify(item)));

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
    updateItem(@Body() item: ItemEntity) {
        this.service.updateItem(item);
    }

    @Delete(":id")
    deleteItem(@Param() params) {
        this.service.deleteItem(params.id);
    }
    

}
