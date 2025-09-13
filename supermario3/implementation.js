/*
*   Retro Redrawn 
*   -- Implementation Script
*
*   Frontend data container of the Redrawn Viewer. 
*   Contains implementation data specific to a Redrawn project.
*
*   Author: Tyson Moll (vvvvvvv)
*
*   Created in 2023
*/

//#region Audio

/**
 * Information about audio tracks used by the audio player. 
 * Please set 'player-data-num' in the index.html to the track number you want to play for each player.
 * @type {Array<{title: string, artist: string, audio: string, audio_intro: string}>}
 */
const AUDIO_TRACKS = [
    {
        title: 'Super Mario Bros 3 Athletic Medley',
        artist: 'Tori Roberts, Pokerus Project',
        audio: 'audio/athletic_medley.mp3',
        audio_intro: 'audio/intro_athletic_medley.mp3'
    }
];

//#endregion

//#region Background Images

/**
 * File path to tiled background image for the canvas (use empty string if none)
 * @type {string}
 */
const CANVAS_BACKGROUND_IMAGE = '';
/**
 * Hex Color for the window background.
 * @type {int}
 */
const WINDOW_BACKGROUND_COLOR = 0x000000;
/**
 * File path to tiled background image for the window (blank if none)
 * @type {string}
 */
const WINDOW_BACKGROUND_IMAGE = 'img/website/grid_mario.png';
/**
 * Whether to apply motion blur to the full viewport or just the map canvas.
 * @type {boolean}
 */
const MOTIONBLUR_VIEWPORT = false;

//#endregion

//#region Art File Naming

/** 
 * Optional suffix added to new map file names (e.g. '_new' for 'map_name_new.png') 
 * @type {string}
 */
const NEW_SLICE_SUFFIX = '';

/** 
 * Optional suffix added to old map file names (e.g. '_old' for 'map_name_old.png')
 * @type {string}
 */
const OLD_SLICE_SUFFIX = '';

// Layers
/**
 * Currently active layer index (and initial index) 
 * @type {int}
 */
var activeLayerIndex = 0;

//#endregion

//#region Content 

/** 
 * Content layers in the Redrawn 
 * @type {Array<{name: string, canvasSize:{width: int, height: int}, areas: string}>}
 */
const redrawnLayers = [
    {
        name: "game", // name of folder containing screens for a layer
        canvasSize: {width: 3960, height: 4900},
        areas: areaData
    }
];

//#endregion

//#region  Biomes
/** 
 * Biome Data (Screen icons). 
 * @type {Array<{name: string, ident: string, iconId: string, color: string}>}
 */
const biomes = [
    {
        name: "World",
        ident: "world",
        iconId: "worldmap",
        color: 'rgb(20 20 20)',
    },
    {
        name: "Grass",
        ident: "grass",
        iconId: "grass",
        color: 'rgb(20 80 160)',
    },
	{
        name: "Desert",
        ident: "desert",
        iconId: "desert",
        color: 'rgb(20 80 160)',
    },
	{
        name: "Water",
        ident: "water",
        iconId: "water",
        color: 'rgb(20 80 160)',
    },
	{
        name: "Giant",
        ident: "giant",
        iconId: "giant",
        color: 'rgb(20 80 160)',
    },
	{
        name: "Sky",
        ident: "sky",
        iconId: "sky",
        color: 'rgb(20 80 160)',
    },
	{
        name: "Ice",
        ident: "ice",
        iconId: "ice",
        color: 'rgb(20 80 160)',
    },
	{
		name: "Pipe",
        ident: "pipe",
        iconId: "pipe",
        color: 'rgb(20 80 160)',
    },
	{
		name: "Dark",
        ident: "dark",
        iconId: "dark",
        color: 'rgb(20 80 160)',
    },
	{
		name: "Bonus",
        ident: "bonus",
        iconId: "bonus",
        color: 'rgb(20 80 160)',
    },
];

/** 
 * Directory of image files tied to defined iconIds. 
 * If not defined here, the icon is looked up in the Material Icon library.  
 * See icon list here >> https://fonts.google.com/icons
 * Ideally use 1:1 ratio svg files; image will automatically be resized.
 * @type {Array<{iconId: string, path: string}>}
 */
const iconFiles = [
    {
        iconId: "worldmap",
        path: "img/website/icon_worldmap.svg"
    },
	{
        iconId: "grass",
        path: "img/website/icon_world1.svg"
    },
	{
        iconId: "desert",
        path: "img/website/icon_world2.svg"
    },
	{
        iconId: "water",
        path: "img/website/icon_world3.svg"
    },
	{
        iconId: "giant",
        path: "img/website/icon_world4.svg"
    },
	{
        iconId: "sky",
        path: "img/website/icon_world5.svg"
    },
	{
        iconId: "ice",
        path: "img/website/icon_world6.svg"
    },
	{
        iconId: "pipe",
        path: "img/website/icon_world7.svg"
    },
	{
        iconId: "dark",
        path: "img/website/icon_world8.svg"
    },
	{
        iconId: "bonus",
        path: "img/website/icon_bonus.svg"
    },
];

//#endregion
