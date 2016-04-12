Template.string.helpers({
    string: function () {
        return Strings.find();
    }
});

Template.string.events({
    'submit #editar' : function (e, t) {
        e.preventDefault();
        var idActual = this._id;
        var valorCadena = t.find('#modificar').value;

        Meteor.call('editarValor', idActual, valorCadena);
        //Strings.update(idActual, {$set: {cadena: t.find('#modificar').value} });
        Router.go('string');
    },
    'click #uppercase': function (e, t) {
        var idActual = this._id;
        var thisCadena = this.cadena;
        Meteor.call('mayusculas', idActual, thisCadena);
        //Strings.update(idActual, {$set: {cadena: this.cadena.toUpperCase()} });
    },
    'click #lowercase': function (e, t) {
        var idActual = this._id;
        var thisCadena = this.cadena;
        Meteor.call('minusculas', idActual, thisCadena);
        //Strings.update(idActual, {$set: {cadena: this.cadena.toLowerCase()} });
    },
    'submit #substring' : function (e, t) {
        e.preventDefault();
        var idActual = this._id;
        var thisCadena = this.cadena;
        var inicio = t.find('#inicioCadena').value;
        var final = t.find('#finalCadena').value;

        Meteor.call('substring', idActual, thisCadena, inicio, final);
        //Strings.update(idActual, {$set: {cadena: this.cadena.substr(inicio, final)} });
        Router.go('string');
    }
});