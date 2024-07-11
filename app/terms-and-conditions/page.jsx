import Container from 'app/componets/Container'
import React from 'react'

const page = () => {
  return (
    <Container>
        <section className='container'>
        <div class="w-full mx-auto p-6">
            <h1 class="text-2xl font-bold mb-4">Estacy Travels Agency</h1>
            <p class="mb-4 md:text-base text-sm">By using the services of Estacy Travels Agency, you and your travel companions acknowledge that you have read, understood, and agreed to the following terms and conditions. In this document, Estacy Travels Agency will be referred to as "the Company".</p>
            <p class="mb-4 md:text-base text-sm">These terms and conditions apply to all customers who utilize the Company's services for their travel arrangements unless specified otherwise.</p>
            <p class="mb-6 md:text-base text-sm">In the case of any discrepancies, these terms and conditions shall take precedence.</p>

            <ul class="list-decimal pl-6">
                
                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Reservations & Payments (Applicable for flexi holidays only)</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">Reservations are processed on a first-come, first-served basis.</li>
                        <li class="mb-2 md:text-base text-sm">If an extra bed is required for a child, or if a child is staying in a room with only one adult, additional charges may apply. Our staff will assist you in determining any applicable surcharges, including those for peak season periods.</li>
                        <li class="mb-2 md:text-base text-sm">Full payment is required at the time of booking.</li>
                        <li class="mb-2 md:text-base text-sm">Making a payment does not guarantee your booking.</li>
                        <li class="mb-2 md:text-base text-sm">A receipt will be emailed to you once the payment has been processed.</li>
                        <li class="mb-2 md:text-base text-sm">Once your purchase is confirmed, a confirmation letter or E-Service Vouchers will be emailed to you.</li>
                        <li class="mb-2 md:text-base text-sm">You will receive a confirmation email within 7-14 working days, finalizing your booking and departure details.</li>
                        <li class="mb-2 md:text-base text-sm">If full payment is not received, please contact our sales team during office hours to address any outstanding issues.</li>
                        <li class="mb-2 md:text-base text-sm">Failure to complete the payment process may result in the cancellation of your reservation and forfeiture of any payment made.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Cancellations</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">All cancellation requests must be submitted in writing. Cancellation fees will be calculated based on the notice period provided before the departure date. The exact fees and refund amounts are determined by the Company.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Cancellations by the Company</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">Please be aware that the Company acts as an agent for the services provided. Even after a deposit or full payment has been made, all arrangements remain subject to final confirmation. If, due to unforeseen circumstances, the arrangement cannot be finalized and the reservation must be canceled, the Company will attempt to notify the Customer before departure.</li>
                        <li class="mb-2 md:text-base text-sm">The Company reserves the right to cancel any tour or medical trip prior to the departure date for any reason, including but not limited to changes in reservation or airline availability. If this occurs, the Company may recommend alternative reservations or airlines.</li>
                        <li class="mb-2 md:text-base text-sm">The Company may suggest alternative reservations or airlines to either the same destination or another destination based on current travel and reservation fares.</li>
                        <li class="mb-2 md:text-base text-sm">All travel services, whether for medical or tourism purposes, are strictly upon request and subject to confirmation. The Company may recommend alternatives if available. Please note that surcharges may apply on a case-by-case basis, and the Customer will be advised accordingly.</li>
                        <li class="mb-2 md:text-base text-sm">The Company shall not be held liable for any cancellation resulting from third-party issues (such as airline cancellations, accommodation non-availability, or hospital or hotel non-disposition) beyond the Company's control. The Company shall not be liable for any claims, losses, damages, or costs sustained by the Customer as a result of such cancellations.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Amendments</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">Amendment fees and their respective components are detailed in the policies of each individual tour product.</li>
                        <li class="mb-2 md:text-base text-sm">All amendment requests must be submitted in writing to avoid misunderstandings and are subject to availability, confirmation by the Company, and payment of amendment fees.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Refund</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">No refund will be provided for accommodation, meals, sightseeing tours, medical appointments, reservations, or any other services included in the tour/medical fare but not utilized by the Customer, either in part or in full. This also applies if the Customer amends, cancels, or otherwise changes arrangements after the commencement of the tour/medical travel.</li>
                        <li class="mb-2 md:text-base text-sm">In the event of cancellation by the Company, the deposit paid will be refunded according to the charges stipulated in Section 2. All refunds will be processed within ten (10) weeks. However, during peak periods, refunds may take up to twelve (12) weeks, subject to the doctrine of force majeure.</li>
                        <li class="mb-2 md:text-base text-sm">The Company acts as an agent for airlines, hotels, hospitals, and accommodation owners. Refunds of travel expenses paid through the Company to any of these entities may take time to process, hence the stipulated period of ten (10) to twelve (12) weeks. This period is contingent on the airline, hotel, hospital, or accommodation owner agreeing to refund the funds to Estacy Travels Agency.</li>
                        <li class="mb-2 md:text-base text-sm">For payments made by credit card, refunds will be processed through the credit card company or by any other means convenient to the Company. Such refunds are contingent on the airline, hotel, hospital, or accommodation owner agreeing to refund the funds to Estacy Travels Agency.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Modes of Payment</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">Payments may be made in Nigerian Naira or United States Dollars, using cash, NETS, cheques, credit cards, or other methods depending on what is convenient for the Company. Cheques will only be accepted if presented to the Company at least 7 working days before the departure date.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Special Requests</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">Any special requests such as special meals, dietary requirements, adjoining rooms, accommodation requirements, etc., must be communicated to the Company upon making a reservation. Please note that such requests are subject to availability and confirmation by the Company.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Travel Documents</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">You must ensure that you have a valid international passport with a minimum of 6 (six) months’ validity from the date of your scheduled return to Nigeria, and at least 4 blank pages side by side. You must also obtain the relevant valid visas and health certificates required at your travel destinations prior to the scheduled departure date.</li>
                        <li class="mb-2 md:text-base text-sm">Different embassies/consulates require varying lengths of time to process visa applications. It is the passenger’s/customer’s sole responsibility to ensure they have a valid visa for travel to countries that require it, regardless of whether the Company was engaged to apply for the visa. Please check with our sales office regarding your visa requirements at least 2 months before your intended trip to ensure all visa requirements are met. Cancellation charges apply if your visa is not approved, and the Company shall not be liable for any refusal of the visa process.</li>
                        <li class="mb-2 md:text-base text-sm">The Company will not be responsible for any expenses, reimbursement, or refund of any tour fare/medical trip schedule if the passenger’s visa process is refused or if the passenger is deported or refused entry by Immigration Authorities on the tour/medical trip for any reason, including improper travel documents, quarantine, customs regulations, possession of unlawful items, or irregularities that may cause harm/damage to persons or property.</li>
                        <li class="mb-2 md:text-base text-sm">Passengers are solely responsible for ensuring that they have all their valid travel documents (passport, visa, etc.).</li>
                        <li class="mb-2 md:text-base text-sm">Where applicable, you shall be responsible for obtaining the necessary exit permits from the relevant authorities, including but not limited to the Ministry of Internal/Foreign Affairs in the Federal Republic of Nigeria, valid for the duration of the tour itinerary. It is recommended that you register your trip with the Ministry of Foreign Affairs.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Travel Insurance</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">It is strongly recommended to arrange travel insurance coverage for trip cancellation, loss of deposit, baggage, personal accident, injury, illness, etc. The Company does not act as a carrier under a contract of carriage for passengers or their baggage and personal belongings. Our staff can assist you with inquiries regarding travel insurance.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Responsibility</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">The Company acts as an agent for carriers, transportation companies, hotels, hospitals, and other third-party suppliers. While reasonable care is taken to ensure the accuracy of product content provided by third-party suppliers, the Company cannot verify all information and product content is subject to change without notice. The Company accepts no responsibility for changes or withdrawals of advertised services or facilities by third-party suppliers.</li>
                        <li class="mb-2 md:text-base text-sm">The Company shall not be liable for any injury, loss, expenses, or damage to belongings unless caused by negligence or breach of duty. Such incidents may result from occurrences beyond the Company’s control, including but not limited to equipment breakdown, strikes, delays, weather conditions, medical reasons, theft, quarantine regulations, customs regulations, cancellations, changes in tour itineraries, flights, or other transportation schedules, deportation, or refusal of entry by immigration authorities due to possession of illegal items or invalid travel documents, or behavior considered subversive by foreign governments.</li>
                        <li class="mb-2 md:text-base text-sm">Customers are responsible for following instructions, including check-in/check-out times and locations, and bear any resulting losses or expenses. Participants must ensure they possess all required travel documents, and where applicable, obtain necessary exit permits from relevant authorities, including the Ministry of Internal/Foreign Affairs in Nigeria, valid for the tour duration. It is advised to register trips with the Ministry of Foreign Affairs.</li>
                        <li class="mb-2 md:text-base text-sm">The Company reserves the right to:</li>
                        <ul class="list-disc pl-6">
                            <li class="mb-1 md:text-base text-sm">Alter tour itineraries, travel arrangements, and accommodations due to unforeseen changes, force majeure events, or conditions in travel/transit countries, with or without prior notice.</li>
                            <li class="mb-1 md:text-base text-sm">Cancel reservations before departure due to insufficient participants, refunding deposits or tour fares without further obligation.</li>
                            <li class="mb-1 md:text-base text-sm">Withdraw any individual from a tour/medical trip if their behavior jeopardizes the safety, interests, harmony, or welfare of other participants and the tour group.</li>
                            <li class="mb-1 md:text-base text-sm">Specify the language(s) used by tour guides for commentary.</li>
                            <li class="mb-1 md:text-base text-sm">Revise tour fares and commencement dates without prior notice.</li>
                            <li class="mb-1 md:text-base text-sm">Alter medical or tour reservations, informing customers at least 7 days in advance. Refunds, less incurred charges, may be issued if customers decline alternative bookings.</li>
                            <li class="mb-1 md:text-base text-sm">Cancel visa applications in case of conflicts of interest or understanding.</li>
                        </ul>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Cancellation and Amendment Policies</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">All cancellations with the company are subject to an administration fee ranging from $100 to $500 per person.</li>
                        <li class="mb-2 md:text-base text-sm">Amendment of reservations is considered a cancellation, and the above-mentioned fees will apply in addition to any new fare charges.</li>
                        <li class="mb-2 md:text-base text-sm">No changes or refunds are permitted for air tickets once issued.</li>
                        <li class="mb-2 md:text-base text-sm">If you have purchased a specially priced promotion or included freebies, no refund, payment, compensation, or credit will be provided if you cancel your booking.</li>
                        <li class="mb-2 md:text-base text-sm">Efforts will be made to adhere to the specifics shown herein and in the itinerary; however, circumstances may require alterations.</li>
                        <li class="mb-2 md:text-base text-sm">Cruise lines reserve the right to cancel or substitute any scheduled port of call, itinerary, price, program, vessel, or cabin at any time without prior notice. Our company is not required to refund any portion of fares or charges nor provide compensation under these circumstances.</li>
                        <li class="mb-2 md:text-base text-sm">Our company is not responsible for changes or cancellations of personally scheduled events due to itinerary alterations.</li>
                        <li class="mb-2 md:text-base text-sm">Our company reserves the right to issue fare increases even after full payment, depending on prevailing rates.</li>
                        <li class="mb-4 md:text-base text-sm">
                            <h2 class="text-xl font-semibold">Pregnancy Policy</h2>
                            <ul class="list-disc pl-6">
                                <li class="mb-2 md:text-base text-sm">Pregnant guests must declare their condition upon booking cruise tours. Guests entering or reaching their 24th week as of the sailing period will not be allowed to board unless they provide a physician’s fit-to-travel note confirming good health, low-risk pregnancy, and not entering their 24th week during the cruise.</li>
                                <li class="mb-2 md:text-base text-sm">No refund or compensation is provided for cancellation due to pregnancy.</li>
                            </ul>
                        </li>

                        <li class="mb-4 md:text-base text-sm">
                            <h2 class="text-xl font-semibold">Infant & Minor Policy</h2>
                            <ul class="list-disc pl-6">
                                <li class="mb-2 md:text-base text-sm">Infants sailing on a cruise must be at least 6 months old at the start of the cruise, and 12 months old for specific cruises. Guests under 21 must be accompanied by an adult 21 years or older, with exceptions for underage married couples or minors sailing with parents in adjacent staterooms.</li>
                                <li class="mb-2 md:text-base text-sm">Minors aged 17 or under must be accompanied by a parent/legal guardian in an adjacent stateroom. Adults accompanying minors must present valid travel documents and a notarized letter authorizing supervision and medical treatment during the cruise.</li>
                                <li class="mb-2 md:text-base text-sm">Failure to provide required documents may result in denial of boarding.</li>
                            </ul>
                        </li>

                        <li class="mb-4 md:text-base text-sm">
                            <h2 class="text-xl font-semibold">Adding Guests</h2>
                            <ul class="list-disc pl-6">
                                <li class="mb-2 md:text-base text-sm">Requests to add a 3rd or 4th guest to a cabin are subject to approval to ensure vessel safety limitations.</li>
                                <li class="mb-2 md:text-base text-sm">Additional guests will be charged at prevailing rates and based on real-time availability. Booking changes may be required if the current cabin/category cannot accommodate additional guests, necessitating repricing.</li>
                                <li class="mb-2 md:text-base text-sm">Note: Additional terms and conditions set by the cruise line may also apply.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">Land Tour/Attraction Tickets/Day Tour/Point-of-Interest/Flight/Hotel</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">Purchase under these categories is non-refundable.</li>
                        <li class="mb-2 md:text-base text-sm">Hotels are subject to change and confirmation.</li>
                        <li class="mb-2 md:text-base text-sm">Each ticket admits one person unless otherwise stated.</li>
                        <li class="mb-2 md:text-base text-sm">All rates are subject to change without notice.</li>
                        <li class="mb-2 md:text-base text-sm">Packages exclude tipping; tipping may be mandatory.</li>
                        <li class="mb-2 md:text-base text-sm">Our company is not responsible for lost or stolen tickets or property.
                            <ul class="list-disc pl-6">
                                <li class="mb-4 md:text-base text-sm">
                                    <h2 class="text-xl font-semibold">Air Tickets General Terms & Conditions Passenger Details</h2>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2 md:text-base text-sm">Passengers must provide correct information as per their passport. Errors or omissions must be corrected immediately upon receiving the itinerary and air tickets. Boarding may be denied if errors are discovered at check-in, for which the company is not liable.</li>
                                    </ul>
                                </li>

                                <li class="mb-4 md:text-base text-sm">
                                    <h2 class="text-xl font-semibold">Entry/Visas</h2>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2 md:text-base text-sm">Passengers must ensure they have valid Entry Visa or Transit Visa for destination countries. The company is not liable for consequences due to improper or incomplete travel documents.</li>
                                    </ul>
                                </li>

                                <li class="mb-4 md:text-base text-sm">
                                    <h2 class="text-xl font-semibold">Passport Validity</h2>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2 md:text-base text-sm">Passports must have a minimum of 6 months validity from the return journey date. Biometric passports are required for travel to the USA.</li>
                                    </ul>
                                </li>

                                <li class="mb-4 md:text-base text-sm">
                                    <h2 class="text-xl font-semibold">Fares, Ticketing Deadline, Auto/Cancellation</h2>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2 md:text-base text-sm">Quoted fares are not guaranteed until tickets are issued and may be subject to changes.</li>
                                        <li class="mb-2 md:text-base text-sm">Booking/Admin Fees are applicable and non-refundable.</li>
                                        <li class="mb-2 md:text-base text-sm">Flight bookings are tentative and may be auto-cancelled without charges, except for Booking/Admin Fees, once tickets are issued.</li>
                                    </ul>
                                </li>

                                <li class="mb-4 md:text-base text-sm">
                                    <h2 class="text-xl font-semibold">Flight Schedule Change</h2>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2 md:text-base text-sm">Passengers should verify flight status with our staff before departure as airlines may cancel, reroute, or change flight timings. Alternative flights may be offered, and standard cancellation or amendment policies apply.</li>
                                    </ul>
                                </li>

                                <li class="mb-4 md:text-base text-sm">
                                    <h2 class="text-xl font-semibold">Penalty & Charges</h2>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2 md:text-base text-sm">Amendments or cancellations after ticket issuance incur airline penalty charges and Booking/Administration Fees. All requests are subject to airline approval.</li>
                                    </ul>
                                </li>

                                <li class="mb-4 md:text-base text-sm">
                                    <h2 class="text-xl font-semibold">Unaccompanied Minor</h2>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2 md:text-base text-sm">Passengers under 17 traveling alone are considered Unaccompanied Minors and require special arrangements to board.</li>
                                    </ul>
                                </li>

                                <li class="mb-4 md:text-base text-sm">
                                    <h2 class="text-xl font-semibold">Child Fares</h2>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2 md:text-base text-sm">Child fares apply to ages 2-11 and do not apply once the child reaches their 12th birthday.</li>
                                    </ul>
                                </li>

                                <li class="mb-4 md:text-base text-sm">
                                    <h2 class="text-xl font-semibold">Infant Fares</h2>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2 md:text-base text-sm">Infant fares apply to children below 2 years old and do not apply once the child reaches their 2nd birthday.</li>
                                    </ul>
                                </li>

                                <li class="mb-4 md:text-base text-sm">
                                    <h2 class="text-xl font-semibold">Special Request</h2>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2 md:text-base text-sm">Customers should email the company for meal requests, seat selections, and special assistance, subject to airline confirmation.</li>
                                    </ul>
                                </li>

                                <li class="mb-4 md:text-base text-sm">
                                    <h2 class="text-xl font-semibold">Baggage Allowance</h2>
                                    <ul class="list-disc pl-6">
                                        <li class="mb-2 md:text-base text-sm">Baggage allowances vary by airline and are subject to change. Contact our consultant or airline website for details.</li>
                                    </ul>
                                </li>
                            </ul>

                        </li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">LIABILITY</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">The Company has taken reasonable care to ensure Product Content is correct.</li>
                        <li class="mb-2 md:text-base text-sm">Customers acknowledge that Product Content is provided by third-party suppliers and may change without notice.</li>
                        <li class="mb-2 md:text-base text-sm">The Company is not liable for changes or withdrawals of advertised services by third-party suppliers.</li>
                        <li class="mb-2 md:text-base text-sm">The Company reserves the right to refuse bookings due to errors in displayed fares or third-party withdrawals.</li>
                        <li class="mb-2 md:text-base text-sm">Under any circumstances, the Company's liability is limited to the amount paid by the customer less charges.</li>
                        <li class="mb-2 md:text-base text-sm">The Company disclaims liability for embassy issues and visa application refusals.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">COMPLAINTS AND CLAIMS</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">Complaints and claims must be submitted in writing within fourteen (14) days from the date of return to Nigeria.</li>
                        <li class="mb-2 md:text-base text-sm">No responsibility is accepted for complaints or claims not submitted within the specified timeframe.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">THIRD-PARTY LIABILITY/CLAIMS</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">The company is not liable for any damage, loss, injury, or costs incurred by customers due to acts of third-party suppliers such as medical personnel, hospital management, hotel staff, flight staff, taxi drivers, and other service providers.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">ALTERNATIVE DISPUTE RESOLUTION</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">Failure to resolve any claim amicably requires either party (the company or the customer) to refer all claims against the company to arbitration before the Lagos State Multi Door Court House. This process is mandatory before recourse to litigation.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">CONFIDENTIALITY OF INFORMATION</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">Customer and/or Travellers warrant that they have given consent to the processing of their Personal Data by the Company, hotels, hospitals, service providers, and any other third parties engaged by the Company for the purpose of dealing with bookings of products.</li>
                        <li class="mb-2 md:text-base text-sm">They also consent to the export of their personal data to any country in the world.</li>
                        <li class="mb-2 md:text-base text-sm">The Company treats every transaction as confidential and will not disclose any information without permission, except where required by law.</li>
                    </ul>
                </li>

                <li class="mb-4 md:text-base text-sm">
                    <h2 class="text-xl font-semibold">VARIATION OF CONDITIONS</h2>
                    <ul class="list-disc pl-6">
                        <li class="mb-2 md:text-base text-sm">The Company reserves the right to change, amend, modify, suspend, continue, or terminate all or any part of the terms and conditions at any time without notice.</li>
                        <li class="mb-2 md:text-base text-sm">Customers will also be subject to terms and conditions from third-party suppliers.</li>
                    </ul>
                </li>

            </ul>
        </div>
        </section>
    </Container>
  )
}

export default page