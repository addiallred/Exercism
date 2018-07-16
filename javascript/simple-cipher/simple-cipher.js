function Cipher(key){
	if(key == ''){throw Error('Bad key');}
	this.key = key || 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'+ 
	'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
	if(this.key == key)
	{
		for(i = 0; i < key.length; i++)
		{
			if(key.charCodeAt(i) < 97 || key.charCodeAt(i) > 122)
			{
				throw Error('Bad key');
			}
		}
	}
	
}
Cipher.prototype.encode = function(text){
	encode = '';
	if(this.key.length < text.length)
	{
		new_key = this.key;
		while(new_key.length < text.length)
		{
			new_key += this.key;
		}
		console.log(new_key);
		this.key = new_key;
		console.log(this.key);
	}
	if(text == this.key){
		for(i = 0; i < text.length; i++){
			number = (text.charCodeAt(i)*2)-97;
			if(number > 122){
				while(number > 122)
				{
					number -= 97;
				}
				number = (number % 26) + 97
			}
			encode += String.fromCharCode(number);
		}
	}
	
	else{
		for(i = 0; i < text.length; i++){
		console.log(this.key[i], text[i]);
		console.log(this.key.charCodeAt(i) - text.charCodeAt(i) + 97)
		encode += String.fromCharCode(Math.abs((this.key.charCodeAt(i) - text.charCodeAt(i))) + 97); 
		}
	}
	return encode;
}
Cipher.prototype.decode = function(text){
	decode = '';
	for(i = 0; i < text.length; i++)
	{
		decode += String.fromCharCode(Math.abs((text.charCodeAt(i) - this.key.charCodeAt(i))) + 97);
	}
	return decode;
}
module.exports = Cipher;
