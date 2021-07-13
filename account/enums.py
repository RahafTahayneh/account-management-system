class AccountStatus:
    PENDING = 'pending'
    APPROVED = 'approved'
    FUNDED = 'funded'
    CLOSED = 'closed'

    CHOICES = (
        (PENDING, PENDING),
        (APPROVED, APPROVED),
        (FUNDED, FUNDED),
        (CLOSED, CLOSED),
    )