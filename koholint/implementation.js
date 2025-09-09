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

// Directories
const CANVAS_BACKGROUND_IMAGE = 'img/website/grid_test.png'; // Tiled background image for the canvas (blank if none)
const WINDOW_BACKGROUND_COLOR = 0x000000;    // Color for the window background
const WINDOW_BACKGROUND_IMAGE = ''; // Tiled background image for the window (blank if none)

// File Naming
const NEW_SLICE_SUFFIX = '' // Optional suffix added to new map file names (e.g. '_new' for 'map_name_new.png')
const OLD_SLICE_SUFFIX = '' // Optional suffix added to old map file names (e.g. '_old' for 'map_name_old.png')

// Audio
var bgmTrack = null;

/** Content layers in the Redrawn */
var activeLayerIndex = 0;           // Currently active layer index (and initial index)
var redrawnLayers = [
    {
        name: "game", // name of folder containing screens for a layer
        canvasSize: {width: 2655, height: 3400},
        areas: castleAreas
    }
];

/** Biome Data (Screen icons) 
 * (to be updated per the organizer's tastes)
 * 
 * see icon list here >> https://fonts.google.com/icons
*/
var biomes = [
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
