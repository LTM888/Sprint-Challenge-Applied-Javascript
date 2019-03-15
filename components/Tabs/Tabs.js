class TabLink {
  constructor(tabElement) {
    // // // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;

    // // Get the `data-tab` value from this.tabElement and store it here
    this.data = this.tabElement.dataset.tab;
    this.card = document.querySelector(`.card[data-tab='${this.tabElement.dataset.tab}']`);
    this.card = new Card(this.card);



    // // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    

    // Check to see if this.tabData is equal to 'all'

    if (this.card === 'all') {
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    }

    selectTab() {
      // Select all elements with the .tab class on them
      const tabs = document.querySelectorAll('.tab');

      // Iterate through the NodeList removing the .active-tab class from each element
      tabs.forEach(function (currentValue) {
        console.log(currentValue);
      });

      // Select all of the elements with the .card class on them
      const cards = document.querySelectorAll('.card ');
      // Iterate through the NodeList setting the display style each one to 'none'
      cards.forEach(function (currentValue) {
        currentValue.display = 'none';
      });
      // Add a class of ".active-tab" to this.tabElement
      let tabElement = document.getElementsByClassName(".active-tab");

      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
      this.cards.forEach(card => card.selectCard());
    }
  }



  class TabCard {
    constructor(cardElement) {
      // Assign this.cardElement to the cardElement DOM reference
      this.cardElement = document.querySelectorAll('.card ');
    }
    selectCard() {
      this.cardElement.forEach(function (currentValue) {
        currentValue.display = 'flex';
      });
      // Update the style of this.cardElement to display = "flex"
      // this.cardElement;
    }
  }

  /* START HERE: 
  - Select all classes named ".tab" and assign that value to the tabs variable
  - With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList
  - In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter
  */

  let tabs = document.querySelectorAll('.tab');

  tabs.forEach(function (tab) {

    return new TabLink(tab);
  });