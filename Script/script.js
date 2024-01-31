// creating the function that generates story structure which can be modified
function generateStory() {
    const stories = [
        "Once upon a time, {name} went to the {place} and {action}.",
        "{name} woke up feeling {feeling} and decided to {activity}.",
        "In a land far away, {name} discovered a magical {object} that could {power}."
    ];
    // creating the values that can be modified
    const values = {
        name: document.getElementById('customName').value || 'Bob',
        place: ['forest', 'river-front', 'mountain'][Math.floor(Math.random() * 3)],
        action: ['found a treasure', 'made a new antique', 'climbed a tree'][Math.floor(Math.random() * 3)],
        feeling: ['happy', 'curious', 'angry'][Math.floor(Math.random() * 3)],
        activity: ['explore', 'learn', 'relax'][Math.floor(Math.random() * 3)],
        object: ['book', 'chavi', 'mirror'][Math.floor(Math.random() * 3)],
        power: ['fly', 'grant wishes', 'teleport'][Math.floor(Math.random() * 3)]
    };
    // persuing random story tamplate
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    // replacing the words
    let generatedStory = randomStory.replace(/{(\w+)}/g, (match, p1) => values[p1]);
    // getting the element by ID to display generated story
    document.getElementById('story').textContent = generatedStory;
}
