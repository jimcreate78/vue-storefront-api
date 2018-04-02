import AbstractCartProxy from '../abstract/cart'


class CartProxy extends AbstractCartProxy {
    constructor (config){
        const Magento2Client = require('./magento2-rest-client').Magento2Client;
        super(config)
        this.api = Magento2Client(config.magento2.api);
    }       

    create (customerToken) { 
        return this.api.cart.create(customerToken)
    }        
    
    update (customerToken, cartId, cartItem) { 
        return this.api.cart.update(customerToken, cartId, cartItem)
    }       

    delete (customerToken, cartId, cartItem) { 
        return this.api.cart.delete(customerToken, cartId, cartItem)
    }        
    pull (customerToken, cartId,  params) { 
        return this.api.cart.pull(customerToken, cartId, params)
    }        
    totals (customerToken, cartId,  params) { 
        return this.api.cart.totals(customerToken, cartId, params)
    }

    getShippingMethods (customerToken, cartId, address) {
        return this.api.cart.shippingMethods(customerToken, cartId, address)
    }

    getPaymentMethods (customerToken, cartId) {
        return this.api.cart.paymentMethods(customerToken, cartId)
    }

    setShippingInformation (customerToken, cartId, address) {
        return this.api.cart.shippingInformation(customerToken, cartId, address)
    }

    collectTotals (customerToken, cartId, shippingMethod) {
        return this.api.cart.collectTotals(customerToken, cartId, shippingMethod)
    }

    applyCoupon (customerToken, cartId, coupon) { 
        return this.api.cart.applyCoupon(customerToken, cartId, coupon)
    }           
    
    deleteCoupon (customerToken, cartId) { 
        return this.api.cart.deleteCoupon(customerToken, cartId)
    }        

    getCoupon (customerToken, cartId) { 
        return this.api.cart.getCoupon(customerToken, cartId)        
    }    
}

module.exports = CartProxy