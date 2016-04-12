Strings = new Mongo.Collection('strings');

Strings.allow({
    update: function () {
        return true;
    }
});

Meteor.methods({
    editarValor: function(idActual, valorCadena){
        Strings.update(idActual, {$set: {cadena: valorCadena} });
    },
    mayusculas: function(idActual, thisCadena){
        Strings.update(idActual, {$set: {cadena: thisCadena.toUpperCase()} });
    },
    minusculas: function(idActual, thisCadena){
        Strings.update(idActual, {$set: {cadena: thisCadena.toLowerCase()} });
    },
    substring: function(idActual, thisCadena, inicio, final){
        Strings.update(idActual, {$set: {cadena: thisCadena.substr(inicio, final)} });
    }
});