export const commands = [
  'shuffle',
]

export default async (selectedElement) => {
  const getSiblings =  (elem) => {
    // Setup siblings array and get the first sibling
    let siblings = [];
    let sibling = elem.firstChild;
    // Loop through each sibling and push to the array
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling
    }
    return siblings;
  };
  const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  const appendSuffledSiblings = (element, suffledElementsArray) => {
    element.innerHTML = '';
    for (let i = 0; i < suffledElementsArray.length; i++) {
      element.appendChild(suffledElementsArray[i])
    }
  };
  const { selected } = selectedElement;
  selected.map(selectedElem => {
    const siblings = getSiblings(selectedElem);
    const shuffledSiblings = shuffle(siblings);
    appendSuffledSiblings(selectedElem, shuffledSiblings);
  })
}
