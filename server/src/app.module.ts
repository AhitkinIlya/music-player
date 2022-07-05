import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path'

import { FileModule } from './file/file.module';
import { TrackModule } from "./track/track.module";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
        TrackModule,
        MongooseModule.forRoot('mongodb+srv://ilya123:q367jtuykw34@cluster0.hmqbumi.mongodb.net/?retryWrites=true&w=majority'),
        FileModule
    ]
})
export class AppModule {}