import React from "react";
import {clarifai_key} from "../credentials";

/**
 * Clarifai import for image match usage
 * @type {{App: function(*=, *, *=): void, FOCUS_MODEL: string, COLOR_MODEL: string, PORTRAIT_QUALITY: string, WEDDINGS_MODEL: string, FACE_DETECT_MODEL: string, CELEBRITY_MODEL: string, GENERAL_EMBED_MODEL: string, LANDSCAPE_QUALITY: string, version: string, CLUSTER_MODEL: string, GENERAL_MODEL: string, DEMOGRAPHICS_MODEL: string, TRAVEL_MODEL: string, MODERATION_MODEL: string, TEXTURES_AND_PATTERNS: string, FACE_EMBED_MODEL: string, APPAREL_MODEL: string, WEDDING_MODEL: string, LOGO_MODEL: string, FOOD_MODEL: string, NSFW_MODEL: string}}
 */
const Clarifai = require('clarifai');

/**
 * Instantiate clarifai app
 * @type {App}
 */
const app = new Clarifai.App({
    apiKey: clarifai_key
});

/**
 * Takes a picture with the camera and returns the base64
 * @param camera
 * @returns {Promise<T|string>}
 */
const takePicture = async (camera) => {
    return await camera.takePictureAsync({
        base64: true,
        quality: .5,

    }).then((response) => response.base64).catch(() => Date.now().toString());

}

/**
 * Checks matching with concept and returns its value range from 0 to 1
 * @param data
 * @returns {Promise<T|number>}
 */
const checkPicture = async (data) => {
    return await app.models.predict(Clarifai.GENERAL_MODEL, {base64: data})
        .then(response => response.outputs[0].data.concepts.findIndex(x => x.name === "hand") === -1 ? false : Date.now())
        .catch(() => false);
}

/**
 * @param camera {object}
 * @param scan {boolean}
 * @returns {{match: number}}
 */
const useScanner = (camera, scan) => {
    const [match, setMatch] = React.useState(false);
    const [scanning, setScanning] = React.useState(false);

    React.useEffect(() => {
        if (scan && !scanning) {
            setScanning(true);
            (async () => {
                const base64 = await takePicture(camera);
                const match = await checkPicture(base64);
                setMatch(match)
            })().then(() => setScanning(false))
        }
    }, [scan, scanning])

    return {match}
}

export default useScanner;