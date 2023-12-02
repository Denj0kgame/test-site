import data from '../content.json' assert {type: 'json'}

console.log(data)

let contentBox = document.querySelector('.content')

for (let name in data) {
    let itemData = data[name]
    let description = data[name]['description']
    let images = data[name]['images']
    let itemKeys = Object.keys(itemData)
    itemKeys.shift(); itemKeys.shift()
    let card = '<div class="card">'
        card += `<div class="card-img" style="background-image: url(./images/${(images.length != 0)? images[0]:"noImages.png"})"></div>`
        card += '<div class="card-content">'
            card += `<div class="card-name">${name}</div>`
            card += `<div class="card-size">`
                card += `<div class="card-size-top">Размер</div>`
                card += `<div class="card-size-box">`
                for (let i in itemKeys) {
                    card += `<i class="${i}" onClick="changePrice(this)">${itemKeys[i]}</i>`
                }
                card += '</div>'
            card += '</div>'
            card += `<div class="card-price">`
                for (let i in itemKeys) {
                    let thisPrices = Object.values(data[name][itemKeys[i]])
                    for (let j in data[name][itemKeys[i]]) {
                        card += `<div class="card-price-box ${i}" ${(i!=0)? 'style="display: none"': ''}>`
                            card += `<div class="card-price-top">Цена ${j}</div>`
                            card += `<div class="card-price-bottom">`
                            let price = thisPrices[0].toString().split('').reverse().join('')
                            // console.log(thisPrices[0])
                            let readeblePrice = ''
                            for (let pos = 0; pos < price.length; pos++) {
                                readeblePrice += price[pos]
                                if (((pos+1)%3 == 0) & (pos != 0)) {
                                    readeblePrice += " "
                                }
                            }
                            card += `<i>${readeblePrice.split('').reverse().join('')}</i>`
                            card += '</div>'
                            thisPrices.shift()
                        card += '</div>'
                    }
                }
            card += '</div>'
            card += `<div class="card-description">${description}</div>`
        card += '</div>'
        card += '</div>'
        contentBox.innerHTML += card

        let test = document.getElementsByClassName('card')
        test = test[test.length-1]
        test = test.children[1].children[1].children[1].children[0]
        changePrice(test)
}