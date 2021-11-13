import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { CreateRental } from 'src/app/models/createRental';
import { CreditCard } from 'src/app/models/creditCard';
import { Rental } from 'src/app/models/rental';
import { CartService } from 'src/app/services/cart.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cartItems:CartItem[];
  nameOnTheCard:string;
  cardNumber:string;
  expirationDate:string;
  cvv:number;

  constructor(private cartService:CartService, private paymentService:PaymentService, 
    private rentalService:RentalService, private router:Router, 
    private toastrService:ToastrService) { }

  ngOnDestroy(): void {
    this.cartService.clearCart();
  }

  ngOnInit(): void {
    this.getCartItems();
    if (this.cartItems.length === 0) {
      this.router.navigateByUrl("/cars");
    }
  }

  getCartItems() {
    this.cartItems = this.cartService.list();
  }

  makePayment() {
    let creditCard:CreditCard = {
      id: 0,
      nameOnTheCard: this.nameOnTheCard,
      cardNumber: this.cardNumber,
      expirationDate: this.expirationDate,
      cvv: this.cvv
    };

    this.paymentService.pay(creditCard).subscribe(
      (response) => {
        if (response.success) {
          let rentalModel:CreateRental = Object.assign({}, {
            carId:this.cartItems[0].car.id,
            customerId:1,
            rentDate:this.cartItems[0].rentDate
          });

          this.rentalService.addRental(rentalModel).subscribe(
            (response) => {
              if (response.success) {
                this.toastrService.success(response.message, "BAŞARILI");
                this.toastrService.success("Araba başarıyla kiralandı.", "BAŞARILI");
          
                setTimeout(() => {
                  this.router.navigateByUrl("/cars");
                }, 3000);
              } else {
                this.toastrService.error(response.message, "HATA");
              }
            }
          );
        } else {
          this.toastrService.error(response.message, "HATA");
        }
      },
      (error) => {
        this.toastrService.error("Ödeme yaparken hata oluştu. Lütfen tekrar deneyiniz." + error.message, "HATA");
      }
    );
  }

}
