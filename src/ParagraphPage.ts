import $ from "jquery";

export const ParagraphPage = () => {
    let lastEditedParagraph = 0

    setTimeout(() => {
        $('#buttonChangeParagraph').on('click', () => {
            const newParagraphText = $('#text1').val()?.toString();

            if (!newParagraphText)
                return;

            if (lastEditedParagraph > 4)
                lastEditedParagraph = 0;

            $(`.text > div:nth-child(${lastEditedParagraph + 1}) > span:last-child`).text(newParagraphText);

            lastEditedParagraph++;
        });

        $('#buttonChangeSpecificParagraph').on('click', () => {
            const paragraphNumber = $('#textParagraph').val();
            const newParagraphText = $('#text2').val()?.toString();

            if (!paragraphNumber || !newParagraphText)
                return;

            if (!Number.isInteger(paragraphNumber))
                return;

            if (paragraphNumber < 1 || paragraphNumber > 5)
                return;

            lastEditedParagraph = Number(paragraphNumber);

            $(`.text > div:nth-child(${paragraphNumber}) > span:last-child`).text(newParagraphText);
        });
    },1_000);

    return `
    <div class="grid-container" xmlns="http://www.w3.org/1999/html">
        <div class="grid-container-full-width text-align-center">Pavadinimas</div>
        
        <div class="action-block">
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
            </div>
            
            <div>
                <label for="text2">Tekstas 2</label>
                <input type="text" id="text2">
            </div>
            
            <div>
                <button type="button" id="buttonChangeSpecificParagraph">Pakeisti nurodyto NR pastraipoje</button>
            </div>
        </div>

        <div class="text">
            <div>
                <span>Pastraipa Nr.1</span>
                
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            
            <div>
                <span>Pastraipa Nr.2</span>
                
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            
            <div>
                <span>Pastraipa Nr.3</span>
                
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            
            <div>
                <span>Pastraipa Nr.4</span>
                
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            
            <div>
                <span>Pastraipa Nr.5</span>
                
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
        </div>
    </div>
`
};