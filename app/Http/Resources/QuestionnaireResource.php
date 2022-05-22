<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\OfficeResource;
use App\Http\Resources\RoleResource;
use App\Http\Resources\PermissionResource;

class QuestionnaireResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'office' => new OfficeResource($this->office),
            'status' => $this->status,
            'created_at' => $this->created_at,
            'updated_at' => $this->created_at,
        ];
    }
}
