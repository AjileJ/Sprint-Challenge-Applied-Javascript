// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(function (response) {
    const listOfTabs = response.data.topics;
    listOfTabs.forEach(tab => {
      topics.appendChild(createTab(tab));
    })
    console.log(response);
    
   
    
   
    })
    .catch(function (error){
      console.log(error);
   })

   function createTab(item){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = item;
    console.log(tab);
    return tab;
   }
   




