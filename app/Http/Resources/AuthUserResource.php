<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\OfficeResource;
use App\Http\Resources\RoleResource;
use App\Http\Resources\PermissionResource;

class AuthUserResource extends JsonResource
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
            'avatar' => $this->avatar,
            'last_login_at' => $this->last_login_at,
            'last_login_ip' => $this->last_login_ip,
            'office_id' => $this->office_id,
            'role_id' => ($this->roles->first()) ? $this->roles->first()->id : null,
            'office' => new OfficeResource($this->office),
            'roles' => array_map(
                function ($role) {
                    return $role['name'];
                },
                $this->roles->toArray()
            ),
            'permissions' => array_map(
                function ($permission) {
                    return $permission['name'];
                },
                $this->getAllPermissions()->toArray()
            ),
            // 'roles' => RoleResource::collection($this->roles),
            // 'permissions' => PermissionResource::collection($this->whenLoaded('permissions', $this->getAllPermissions())),
            'created_at' => $this->created_at,
            'updated_at' => $this->created_at,
        ];
    }
}
