function grant (form1) {
 	var price = 0
 	if (form1.elements[0].checked) {
 			let c1 = form1.elements[0].value
 			if (form1.elements[1].checked) c1 *= form1.elements[1].value
 			else if (form1.elements[2].checked) c1 *= form1.elements[2].value
 			else if (form1.elements[3].checked) c1 *= form1.elements[3].value

 			if (form1.elements[4].checked) c1 *= form1.elements[4].value
 			else if (form1.elements[5].checked) c1 *= form1.elements[5].value

 			if (form1.elements[6].checked) c1 *= form1.elements[6].value
 			else if (form1.elements[7].checked) c1 *= form1.elements[7].value
 			price += c1
 		}

 	if (form1.elements[8].checked) {
 			let c2 = form1.elements[8].value
 			if (form1.elements[9].checked) c2 *= form1.elements[9].value
 			else if (form1.elements[10].checked) c2 *= form1.elements[10].value
 			else if (form1.elements[11].checked) c2 *= form1.elements[11].value

 			if (form1.elements[12].checked) c2 *= form1.elements[12].value
 			else if (form1.elements[13].checked) c2 *= form1.elements[13].value

 			if (form1.elements[14].checked) c2 *= form1.elements[14].value
 			else if (form1.elements[15].checked) c2 *= form1.elements[15].value
 			price += c2
 		}
 	 form1.ww.value = 'Ціна курсу ' + price + ' y.e.'
}
