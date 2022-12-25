import './style.css'
import './customStyle.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="grid-container">
        <div class="grid-container-full-width">Pavadinimas</div>
        
        <div>
            <div>
                <label for="text1">Tekstas 1</label>
                <input type="text" id="text1">
            </div>
            
            <div>
                <button type="button" id="buttonChangeParagraph">Pakeisti pastraipose is eiles</button>
            </div>
            
            <div>
                <label for="textParagraph">Pastraipos nr.</label>
                <input type="text" id="textParagraph">
            </div
            
            <div>
                <label for="">Tekstas 2</label>
                <input type="text">
            </div>
            
            <div>
                <button type="button" id="buttonChangeSpecificParagraph">Pakeisti nurodyto NR pastraipoje</button>
            </div>
        </div>

        <div>
            <span>
                <span>Pastraipa Nr.1</span>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            
            <span>
                <span>Pastraipa Nr.2</span>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            
            <span>
                <span>Pastraipa Nr.3</span>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            
            <span>
                <span>Pastraipa Nr.4</span>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            
            <span>
                <span>Pastraipa Nr.5</span>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
        </div>
    </div>
`;


