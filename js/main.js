


var arr2 = [
    {
        name: 'hanna dias',
        kasb: 'software enginner',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quidem cupiditate reiciendis repudiandae doloribus facilis sapiente facere et, eaque iste! Ullam incidunt fugiat doloremque officia tenetur dolorem vel itaque recusandae.',
        img: 'https://s3-alpha-sig.figma.com/img/ff82/f2ee/5fc84ad9b43980c8e6fabac55654374f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TGUv0~90IsaU4g158GNRZYDye~x95q8c75v1Bv4jb0rmae~LnItZSNLWVULvoKE93oTNafLQfdUB6K-4bea7YLdkmET3XxkTmRPUG4~FWIiTtxOA32jdHyLBiOKq1tJgl9eBu8YUDCqGyj12o7zsplYjgVIeMs0kbHh3zuV~DlGNGY-m4EE7njSMQWUlkObR0SCWyMsJut~HH5MjyVJ43ZhSYUd5GYIyWWysIisiSk5UYpHpJw-4ZR9C7dW5Kr8Nq1xb~bCMa7dm~lfy3lYlS6Po~Dp1Qc5zERC7Qjgqwy6W-VNL08UtDj91d06aWzvGp7TG~Ixqqeg~5TI6YktTaA__'
    },
    {
        name: 'leo adams',
        kasb: 'software enginner',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quidem cupiditate reiciendis repudiandae doloribus facilis sapiente facere et, eaque iste! Ullam incidunt fugiat doloremque officia tenetur dolorem vel itaque recusandae.',
        img: 'https://s3-alpha-sig.figma.com/img/882f/e4bf/744ac2a50601fe06a0918fb1db7cc54a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=STfwc8JGNfbNAXdQ1HeDRTVTYw8llF0VubJhtGFPxXJQ0VdxeQcHbo9xDGABRqErUdN6nU4OzyQdHH97yvRf~tG6F55vx2KJ9Oj7e~wHo4SExbkPGG3HgPvPhNAqp~3FBVzl5OCUI7oWTexmnvKATxzh7HDx84qrKLCEO4rbVPqLixYIdD8WxkwO~7cNJAuh7yeP1a~61rdqHnni2q3V1sVnyVhEJ4m9UZOEZ~bnnedcYbPAKOavN~~HsrN3s~kM~wYQBkBefUVnoiTsgtMpnO5TLzFG3UyWJzF4J3CBJiZXlCVcC-uwU9msZI19aR4LwLkCIjLVmV-iMlpEViKo4w__'
    },
    {
        name: 'martin donin',
        kasb: 'software enginner',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quidem cupiditate reiciendis repudiandae doloribus facilis sapiente facere et, eaque iste! Ullam incidunt fugiat doloremque officia tenetur dolorem vel itaque recusandae',
        img: 'https://s3-alpha-sig.figma.com/img/de2a/5f0f/7b341da4f10c34c8636d72ba12aa437b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N46oX-fJsnVuIv6oXINSXINqnjgGcfHTAtiA5zzi4ygnd-YqcCt-0ysj0rsLZoRFh224EMW9ikVPJn9YmUEH99xQMt6qNm-b4cVNEbw1bAuHpV5mTfdesL037gw5uSiBJreZ4GUe5wP9k0Lwo49vdajA-mEQXawoU4G9vwbIbA2CzILcql4mq8J1PasjRXHnX88Fl9VfynCbAWsnYXEB2BeSVVSvA-bGmcKJOAcWg-m2ejcaRNJ4VTRQxPEWpxMCq5Ejed~isie0tbo~PL74nb~RFNAKs7Ur2rD9kh8w0M2DLNAey7rklDqZqfEcHvsRHo9nrrOp4GaDH7kZolfNeA__'
    },
    {
        name: 'jordan septimus',
        kasb: 'software enginner',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quidem cupiditate reiciendis repudiandae doloribus facilis sapiente facere et, eaque iste! Ullam incidunt fugiat doloremque officia tenetur dolorem vel itaque recusandae.',
        img: 'https://s3-alpha-sig.figma.com/img/2032/145a/e3f736f94cf1062d4badbfa5ff68a775?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oQegp4ra0Bqa4-mWZXctlMTM18lVer5UfODzUcbOTBiock0-YDN4W~4TTxP8vNtUrC9sLppnohWRtvyiXFyvkl1pW7-GuSOi12pOwHqoTlBOCB2HpTQtTIXcUgOqM6uqoXgQtWCyNOtFbZlmrcTzMLk1egic4hnNHS80tmyOLefrySTQtaotZXDtfDs1KaJA8MUlFDQVA0nyIcbKEBOWsb~dFLT3CJEtkeYd6NUa0pNACRCiAHMkbSjwaRnA0yRbwYLSg6zKPtIjvlv-g628OUDemXBqToS6bLrsuyr5R5o4WvV3iCXfED~e~lOuhslv2Req8vbRv8pSg9wlKY5JvA__'
    },

]
var elList2 = document.querySelector('.list2')

for (var item2 of arr2) {
    var newLi2 = document.createElement('li')
    newLi2.classList.add('list__item2')
    newLi2.innerHTML = `
         <img src=${item2.img} alt="">
         <h2>${item2.name}</h2>
         <p>${item2.age}</p>
         <p>${item2.about}</p>
    `
    elList2.appendChild(newLi2)
}