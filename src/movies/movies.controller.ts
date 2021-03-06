import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'This will return all movies.';
    }
    
    @Get('search')
    search(@Query('year') searchingYear: string) {
        return `We are searching for a movie with the searching year: ${searchingYear}.`;
    }
    
    @Get('/:id')
    getOne(@Param('id') movieId: string) {
        return `This will return one movie with the ID: ${movieId}.`;
    }
    
    @Post()
    create(@Body() movieData) {
        // console.log(`movieData[title]: ${movieData.title}.`);
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return `This will delete the movie with the ID: ${movieId}.`;

    }

    @Put('/:id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            //`This will update the movie with the ID: ${movieId}.`;
            
            updateMovieId: movieId,
            title: 'Neo returns',
            ...updateData,
            
        }
    }

}
