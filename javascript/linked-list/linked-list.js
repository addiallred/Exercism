var LinkedList = function(){
	this.linked_list = [];
	this.push = function(element){
		this.linked_list.push(element);
	}
	this.pop = function(element){
		return this.linked_list.pop();
	}
	this.shift = function(element){
		return this.linked_list.shift();
	}
	this.unshift = function(element){
		this.linked_list.unshift(element);
	}
	this.count = function(){
		return this.linked_list.length;
	}
	this.delete = function(element){
		this.linked_list.splice(this.linked_list.indexOf(element),1)
	}
};
module.exports = LinkedList;