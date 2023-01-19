// defining Camera project
import readline from 'readline-sync';
import chalk from 'chalk';


const Mini_Cameras            = 'Mini Cameras';
const Digital_Cameras         = 'Digital Cameras';
const ThreeD_Cameras          = 'ThreeD_Cameras';
const Picture_perfect_Cameras = 'Picture Perfect Cameras';

const Cameras = [
    Mini_Cameras,
    Digital_Cameras,
    ThreeD_Cameras,
    Picture_perfect_Cameras
];

const  Mini_Cameras_Pix = [
    'Mini Camera 1x   = 2k',
    'Mini Camera 2x   = 3k',
    'Mini Camera 3x   = 4k',
    'Mini Camera 4x   = 5k'
];


const Digital_Cameras_Pix = [
    'Digital Camera 5x   = 6k',
    'Digital Camera 6x   = 7k',
    'Digital Camera 7x   = 8k',
    'Digital Camera 8x   = 9k',
];


const Three_D_Cameras_pix = [
    '3D Camera 9x   = 10k',
    '3D Camera 10x  = 11k',
    '3D Camera 11x  = 12k',
    '3D Camera 12x  = 13k',
];

const Picture_perfect_Cameras_pix = [
    'Picture Perfect Cameras 13x = 14k',
    'Picture Perfect Cameras 14x = 15k',
    'Picture Perfect Cameras 15x = 16k',
    'Picture Perfect Cameras 16x = 17k',
];

const HIGH_QUALITY_PICTURE = {
    'Mini Cameras'            : Mini_Cameras_Pix,
    'Digital Cameras'         : Digital_Cameras_Pix,
    'ThreeD_Cameras'          : Three_D_Cameras_pix,
    'Picture Perfect Cameras' : Picture_perfect_Cameras_pix
};

console.log (chalk.bgCyanBright(`Welcome To Cameras Zone`));
console.log (chalk.bgRed(`Please Select A Camera Option`));

const Selected_Cameras = readline.keyInSelect(Cameras);
const Selected_Pixels_Ratio = Cameras[Selected_Cameras];
console.log (`Selected pixels ratio ${Selected_Pixels_Ratio}`);

display_Pixels_Ratio_Cameras(Selected_Pixels_Ratio);

function display_Pixels_Ratio_Cameras (Selected_Pixels_Ratio) {
    const HIGH_Cameras = HIGH_QUALITY_PICTURE[Selected_Pixels_Ratio];
    if (HIGH_Cameras) {
        const ALL_CAMERAS = readline.keyInSelect(HIGH_Cameras);
        const ALL_TYPESOF_CAMERAS = HIGH_Cameras[ALL_CAMERAS];
        if (Selected_Pixels_Ratio) {
        console.log (chalk.bgGreen(`Thank You For Purchasing ${ALL_TYPESOF_CAMERAS}`))
        }else {
            ShowNotSelectedMessage() 
        }
    }else {
        ShowNotSelectedMessage() 
    }
    
    }

function ShowNotSelectedMessage() {
    console.log(chalk.bgRedBright(`NOT SELECTED ANY OPTION,PLEASE SELECT`))
}