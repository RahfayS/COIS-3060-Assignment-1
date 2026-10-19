
const VALID_TABS = ["data-sources","collection-methods","analysis-methods","publication-venues"];

function toggleTab(tabName){

    // Verify the selected tab to switch to is valid
    if (!VALID_TABS.includes(tabName)){
        console.log(`Selected tab (${tabName}) is not a valid tab`);
        return;
    }

    // Define scoped variable tab, which contains all tab names
    let tabs = document.getElementsByClassName("tab-content");
    
    // Iterate through all tabs
    for (let i = 0; i < tabs.length; i++){
        // Hide all tabs that are not tabName
        if (tabs[i].id === tabName){
            tabs[i].style.display = "block";
        }else{
            tabs[i].style.display = "none";
        }
    }

}
