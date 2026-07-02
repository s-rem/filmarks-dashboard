/**
 * filterUtils.js
 *
 * プルダウンの選択肢を作成する
 *
 * @param {HTMLSelectElement} selectElement
 * @param {Array} values
 */
function populateSelectOptions(
    selectElement,
    values
) {

    values.forEach(value => {

        const option =
            document.createElement(
                "option"
            );

        option.value = value;

        option.textContent = value;

        selectElement.appendChild(
            option
        );

    });

}
