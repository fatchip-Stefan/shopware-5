{namespace name='frontend/MoptPaymentPayone/payment'}

{if $payment_mean.id == $form_data.payment}
    {assign var="moptRequired" value=1}
{else}
    {assign var="moptRequired" value=0}
{/if}