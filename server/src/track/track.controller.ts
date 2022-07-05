import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFiles, Query } from "@nestjs/common";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import { ObjectId } from "mongoose";

import { TrackService } from "./track.service";
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from "./dto/create-comment.dto";


@Controller('/tracks')
export class TrackController {
    constructor(private trackService: TrackService) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
      ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
        const { picture, audio } = files
        return this.trackService.create(dto, picture[0], audio[0])
    }
    
    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.trackService.getOne(id)
    }

    @Get()
    getAll(
        @Query('count') count: number,  
        @Query('offset') offset: number,
        @Query('search') search: string

    ) {
        return this.trackService.getAll(count, offset, search)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.trackService.delete(id)
    }

    @Post('/comment')
    addComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto)
    }

    @Post('/listen/:id')
    incrementListen(@Param('id') id: ObjectId) {
        return this.trackService.incrementListen(id)
    }
}