// Define enum for notification identifiers
export enum N {
	NewReview = "newReview",
	NewOffer = "newOffer",
	DeactivatedReview = "deactivatedReview",
	ChangedReview = "changedReview",
	OfferWithdrawalConfirmation = "offerWithdrawalConfirmation",
	OfferAcceptance = "offerAcceptance",
	OfferRejection = "offerRejection",
	MessageFromHandyman = "messageFromHandyman",
	OfferWithdrawalByHandyman = "offerWithdrawalByHandyman",
	SuccessfulOfferRejection = "successfulOfferRejection",
}

// Define interface for notification message parameters
interface NotificationParams {
	identifier: N;
	fromHandyman?: boolean;
	handymanName?: string;
	customerName?: string;
}

// Function to get notification message
export default function getNotificationMessage(
	params: NotificationParams
): string {
	const {
		identifier,
		handymanName,
		fromHandyman = false,
		customerName = "",
	} = params;

	let message: string = "";

	if (fromHandyman) {
		switch (identifier) {
			case N.NewReview:
				message = `You have received a new review from ${customerName}.`;
				break;
			case N.NewOffer:
				message = `You have successfully sent an offer to ${customerName}.`;
				break;
			case N.DeactivatedReview:
				message = `${customerName} has deactivated the review for this job.`;
				break;
			case N.ChangedReview:
				message = `${customerName} has changed the review for this job.`;
				break;
			case N.OfferWithdrawalConfirmation:
				message =
					"You have successfully withdrawn your offer for the job.";
				break;
			case N.OfferAcceptance:
				message =
					"Your offer for the job has been accepted by the customer.";
				break;
			case N.OfferRejection:
				message =
					"Your offer for the job has been rejected by the customer.";
				break;
			default:
				message = "Unknown notification.";
		}
	} else {
		switch (identifier) {
			case N.NewOffer:
				message = `New offer from ${handymanName} received. Check the status in the offer section.`;
				break;
			case N.DeactivatedReview:
				message = "Your review has been successfully deactivated.";
				break;
			case N.MessageFromHandyman:
				message = `You have received a new message from ${handymanName}. Check your inbox to view the message.`;
				break;
			case N.OfferWithdrawalByHandyman:
				message = `${handymanName} has withdrawn their offer for the job.`;
				break;
			case N.SuccessfulOfferRejection:
				message =
					"You have successfully rejected the offer for the job.";
				break;
			default:
				message = "Unknown notification.";
		}
	}

	return message;
}

export const generateLink = (role: string, path: string, id: string) =>
	`/dashboard/${role}/${path}/#${id}`;
