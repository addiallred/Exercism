var DnaTranscriber = function(){
	this.dnaConversion = new Map([['G', 'C'], ['C', 'G'], ['T', 'A'], ['A', 'U']]);
};
DnaTranscriber.prototype.toRna = function(dna){
	rna = '';
	for(i = 0; i < dna.length; i++){
		if(this.dnaConversion.get(dna[i]) == undefined){
			throw new Error('Invalid input')
		}
		rna += this.dnaConversion.get(dna[i]);
	}
	return rna;
};
module.exports = DnaTranscriber;