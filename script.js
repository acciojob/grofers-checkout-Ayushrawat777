   document.getElementById('calculate').addEventListener('click', function() {
            const prices = document.querySelectorAll('.prices');
            let total = 0;

            prices.forEach(price => {
                total += parseFloat(price.textContent);
            });

            let totalRow = document.createElement('tr');
            totalRow.innerHTML = `<td><strong>Total Price</strong></td><td><strong>$${total.toFixed(2)}</strong></td>`;
            document.getElementById('grocery-list').appendChild(totalRow);
        });