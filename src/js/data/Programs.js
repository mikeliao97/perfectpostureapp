import exerciseList from './Exercises';
const programs = {
    'ROUNDED_SHOULDERS': {
        'meta': {
            "name": "Rounded shoulders"
        },
        "program": [
            {
                "exercise": exerciseList["THORACIC_FOAM_ROLL"],
                "duration": 60,
            },
            {
                "exercise": exerciseList["CHEST_DOORWAY_STRETCH"],
                "duration": 60,
            },
            {
                "exercise": exerciseList["SHOULDER_EXTENSION_STRETCH"],
                "duration": 60,
            },            
            {
                "exercise": exerciseList["FLOOR_Y_RAISE"],
                "duration": 60,
            },            
        ]
    }
}
export default programs;