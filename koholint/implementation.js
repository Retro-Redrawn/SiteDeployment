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
        title: 'Mabe Village',
        artist: 'Tori Roberts',
        audio: 'audio/mabe_village_v2.mp3',
        audio_intro: ''
    }
];

//#endregion

//#region Background Images

/**
 * File path to tiled background image for the canvas (use empty string if none)
 * @type {string}
 */
const CANVAS_BACKGROUND_IMAGE = 'img/website/grid_test.png';
/**
 * Hex Color for the window background.
 * @type {int}
 */
const WINDOW_BACKGROUND_COLOR = 0x000000;
/**
 * File path to tiled background image for the window (blank if none)
 * @type {string}
 */
const WINDOW_BACKGROUND_IMAGE = '';
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
        canvasSize: {width: 2655, height: 3400},
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
        name: "Terrace",
        ident: "terrace",
        iconId: "grass",
        color: 'rgb(90 180 100)',
    },
    {
        name: "Underground",
        ident: "underground",
        iconId: "fireplace",
        color: 'rgb(113 104 127)',
    },
    {
        name: "Castle",
        ident: "castle",
        iconId: "fort",
        color: 'rgb(114 79 52)',
    },
    {
        name: "Town",
        ident: "town",
        iconId: "house",
        color: 'rgb(150 90 45)',
    },
    {
        name: "Dungeon",
        ident: "dungeon",
        iconId: "music_note",
        color: 'rgb(180 60 90)',
    },

    {
        name: "Boss",
        ident: "boss",
        iconId: "dark_mode",
        color: 'rgb(110 25 40)',
    },
    {
        name: "Other",
        ident: "other",
        iconId: "dataset",
        color: 'rgb(94 94 94)',
    },
    {
        name: "Mountain",
        ident: "mountain",
        iconId: "landscape",
        color: 'rgb(120 94 94)',
    },
    {
        name: "Forest",
        ident: "forest",
        iconId: "forest",
        color: 'rgb(30 120 80)',
    },
    {
        name: "Desert",
        ident: "desert",
        iconId: "sunny",
        color: 'rgb(240 170 30)',
    },
    {
        name: "Beach",
        ident: "beach",
        iconId: "beach_access",
        color: 'rgb(255 200 60)',
    },
    {
        name: "Surfing",
        ident: "surfing",
        iconId: "surfing",
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
];

//#endregion
