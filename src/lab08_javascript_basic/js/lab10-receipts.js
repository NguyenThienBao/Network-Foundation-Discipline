const frm_receipt = document.getElementById("frmReceipts");
const list_receipts = document.getElementById("list-receipts");


var list_items = [];


// Add Receipt
const handleFormSubmit = (event) => {
    event.preventDefault();

    let receipt_name = document.getElementById("txt-name").value;
let receipt_method = document.getElementById("lst-method").value;
let receipt_note = document.getElementById("txt-notes").ariaValueNow;

    const new_receipt = { receipt_name, receipt_method, receipt_note, id: Date.now() };
    list_items.push(new_receipt);

    event.target.reset();

    document.getElementById("txt-name").focus();

    list_receipts.dispatchEvent(new CustomEvent('refresh-receipts'));
}

const handleRefreshReceipts = () => {
    const template_receipts_ui = list_items.map(receipt => `
        <div class='receipts-item'>
            <h3>${receipt.receipt_name}</h3>
            <ul>
                <li><strong>Method:</strong> ${receipt.receipt_method}</li>
                <li><strong>Note:</strong> ${!receipt.receipt_note ? "<em>Nothing</em>" : receipt.receipt_note}
            </ul>
            <button type="button" class="btnDelete" onClick="handleDeleteReceipt(${receipt.id})">Done</button>
        </div>
        `).join('');

    list_receipts.innerHTML = template_receipts_ui;
}

const handleDeleteReceipt = (id) => {
    let receiptId = list_items.findIndex(receipt => receipt.id == id);
    list_items.slice(receiptId, 1);
    list_receipts.dispatchEvent(new CustomEvent('refresh-receipts'));
}

// Event Handler
frm_receipt.addEventListener("submit", handleFormSubmit);
list_receipts.addEventListener("refresh-receipts", handleRefreshReceipts);